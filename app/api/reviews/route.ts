import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Review from '@/models/Review';
import { getCurrentAdmin } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const productSlug = searchParams.get('productSlug');
    const all = searchParams.get('all');

    const admin = await getCurrentAdmin();

    const mongoose = await connectToDatabase();
    if (!mongoose) {
      return NextResponse.json({ reviews: [] });
    }

    const query: any = {};
    if (productSlug) {
      query.productSlug = productSlug;
    }

    // Public requests ONLY get APPROVED reviews. Only logged-in admin can request all reviews.
    if (!admin || all !== 'true') {
      query.status = 'APPROVED';
    }

    const reviews = await Review.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ reviews });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productSlug, customerName, rating, comment } = body;

    if (!productSlug || !customerName || !rating || !comment) {
      return NextResponse.json(
        { error: 'Product, your name, rating, and review comments are required.' },
        { status: 400 }
      );
    }

    const numRating = Number(rating);
    if (numRating < 1 || numRating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5 stars.' },
        { status: 400 }
      );
    }

    const reviewData = {
      productSlug,
      customerName: customerName.trim(),
      rating: numRating,
      comment: comment.trim(),
      status: 'PENDING_APPROVAL', // Strict moderation requirement
      isVerifiedPurchase: false,
    };

    const mongoose = await connectToDatabase();
    if (mongoose) {
      const created = await Review.create(reviewData);
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your review has been submitted for studio moderation.',
        review: created,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your review has been submitted for studio moderation.',
      review: reviewData,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized admin access' }, { status: 401 });
    }

    const body = await req.json();
    const { reviewId, status } = body;

    if (!reviewId || !['APPROVED', 'REJECTED'].includes(status)) {
      return NextResponse.json({ error: 'Invalid review ID or moderation status.' }, { status: 400 });
    }

    const mongoose = await connectToDatabase();
    if (mongoose) {
      const updated = await Review.findByIdAndUpdate(
        reviewId,
        { status },
        { new: true }
      );
      return NextResponse.json({ success: true, review: updated });
    }

    return NextResponse.json({ success: true, reviewId, status });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
