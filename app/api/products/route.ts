import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Product from '@/models/Product';
import { getCurrentAdmin } from '@/lib/auth';
import { MOCK_PRODUCTS } from '@/lib/mockData';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');

    const mongoose = await connectToDatabase();
    if (mongoose) {
      const query: any = { isActive: true };

      if (category && category !== 'all') {
        query.categorySlug = category;
      }
      if (featured === 'true') {
        query.isFeatured = true;
      }
      if (search) {
        query.name = { $regex: search, $options: 'i' };
      }

      const products = await Product.find(query).sort({ createdAt: -1 });
      if (products.length > 0) {
        return NextResponse.json({ products });
      }
    }

    // Fallback to rich mock products
    let filtered = [...MOCK_PRODUCTS];
    if (category && category !== 'all') {
      filtered = filtered.filter((p) => p.categorySlug === category);
    }
    if (featured === 'true') {
      filtered = filtered.filter((p) => p.isFeatured);
    }
    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(s) || p.description.toLowerCase().includes(s)
      );
    }

    return NextResponse.json({ products: filtered });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized admin access' }, { status: 401 });
    }

    const body = await req.json();
    const { name, slug, price, stock, categorySlug, description, images, isFeatured } = body;

    if (!name || !slug || price === undefined || stock === undefined || !categorySlug || !description) {
      return NextResponse.json(
        { error: 'Name, slug, price, stock, category, and description are required' },
        { status: 400 }
      );
    }

    const mongoose = await connectToDatabase();
    if (!mongoose) {
      return NextResponse.json(
        { error: 'MongoDB connection required for permanent admin product creation' },
        { status: 503 }
      );
    }

    const product = await Product.create({
      name,
      slug: slug.toLowerCase().trim(),
      price: Number(price),
      stock: Number(stock),
      categorySlug,
      description,
      images: Array.isArray(images) && images.length ? images : ['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800'],
      isFeatured: !!isFeatured,
      isActive: true,
    });

    return NextResponse.json({ success: true, product }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
