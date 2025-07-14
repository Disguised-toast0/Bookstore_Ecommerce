# BookVerse

A modern, full-stack bookstore web app built with React, TypeScript, and Stripe Checkout.

## Features
- Beautiful, responsive UI with Tailwind CSS
- Browse, search, and filter a curated collection of books
- Add books to cart, update quantities, and remove items
- Full checkout flow with Stripe payment integration
- Order summary and payment success/failure pages
- Minimal, user-friendly cart and checkout experience

## Getting Started

### 1. Clone the Repository
```
git clone <your-repo-url>
```

### 2. Install Dependencies
```
npm install
```

### 3. Stripe Setup
This app uses Stripe Checkout for real payments. You need both a **Stripe Secret Key** (for backend) and a **Publishable Key** (for frontend).

#### a. Get your Stripe API keys
- Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
- Copy your **Secret Key** (starts with `sk_test_...`)
- Copy your **Publishable Key** (starts with `pk_test_...`)

#### b. Add your Stripe Secret Key to the backend
1. In the `backend/` folder, create a file named `.env`:
   ```
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   ```
2. **Never commit your secret key to GitHub!**

#### c. Add your Stripe Publishable Key to the frontend
1. In `src/App.tsx`, find this line:
   ```js
   const stripePromise = loadStripe('');
   ```
2. Replace with your publishable key:
   ```js
   const stripePromise = loadStripe('pk_test_your_publishable_key_here');
   ```

### 4. Run the App
```
npm run dev
```
- This will start both the frontend (Vite) and backend (Express/Stripe) servers.
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:4242](http://localhost:4242)

## Usage
- Browse and search for books.
- Add books to your cart.
- Click the cart icon to view and update your cart.
- Click "Proceed to Checkout" to review your order and pay with Stripe.
- After payment, you'll see a success or failure page.

## Development Notes
- All sensitive files and build artifacts are gitignored.
- The backend uses CommonJS (`server.cjs`) for compatibility with Node.js and dotenv.
- For deployment, update the Stripe `success_url` and `cancel_url` in the backend to match your deployed frontend URL.

## License
MIT 