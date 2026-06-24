import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'dummy_key');
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    if (!webhookSecret) {
      console.warn('STRIPE_WEBHOOK_SECRET is not set. Webhook verification skipped.');
      return NextResponse.json({ error: 'Webhook secret missing' }, { status: 400 });
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed.', err.message);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        
        // This is where you would fulfill the order in your database
        console.log('Payment was successful for session:', session.id);
        if (session.metadata?.userId) {
          console.log('Order belongs to user:', session.metadata.userId);
        }
        
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Error handling webhook:', err);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
