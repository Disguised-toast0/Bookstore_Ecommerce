// backend/server.js
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.YOUR_SECRET_KEY);
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;
  try {
    const line_items = items.map(item => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.product.name,
        },
        unit_amount: Math.round(item.product.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5173/payment-success',
      cancel_url: 'http://localhost:5173/payment-failure',
    });
    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Stripe backend running on port ${PORT}`));

// INSTRUCTIONS:
// 1. Create a .env file in the backend/ folder.
// 2. Add: STRIPE_SECRET_KEY=sk_test_... (your Stripe secret key)
// 3. Run: npm install (if you haven't already)
// 4. Start both servers: npm run dev 