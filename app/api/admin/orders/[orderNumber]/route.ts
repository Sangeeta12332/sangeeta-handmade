import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Order from '@/models/Order';
import { getCurrentAdmin } from '@/lib/auth';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { orderNumber: string } }
) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized admin access' }, { status: 401 });
    }

    const { orderNumber } = params;
    const body = await req.json();
    const { orderStatus, paymentStatus, courier, trackingNumber, trackingUrl, adminNotes } = body;

    const mongoose = await connectToDatabase();
    if (!mongoose) {
      return NextResponse.json({
        success: true,
        orderNumber,
        updatedFields: body,
        message: 'Order updated in-memory (MongoDB offline)',
      });
    }

    const updateData: any = {};
    if (orderStatus) updateData.orderStatus = orderStatus;
    if (paymentStatus) updateData.paymentStatus = paymentStatus;
    if (adminNotes !== undefined) updateData.adminNotes = adminNotes;

    if (courier || trackingNumber || trackingUrl) {
      updateData.tracking = {
        courier: courier || '',
        trackingNumber: trackingNumber || '',
        trackingUrl: trackingUrl || '',
        shippedAt: orderStatus === 'SHIPPED' ? new Date() : undefined,
      };
    }

    if (orderStatus === 'DELIVERED') {
      updateData.deliveredAt = new Date();
    }
    if (orderStatus === 'CANCELLED') {
      updateData.cancelledAt = new Date();
    }

    const updated = await Order.findOneAndUpdate(
      { orderNumber },
      { $set: updateData },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, order: updated });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
