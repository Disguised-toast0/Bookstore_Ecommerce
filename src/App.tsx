import { useState, useMemo } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { FeaturedSection } from '@/components/layout/FeaturedSection';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductDetail } from '@/components/products/ProductDetail';
import { CartSheet } from '@/components/cart/CartSheet';
import { CartProvider, useCart } from '@/contexts/CartContext';
import { Product } from '@/types';
import { products } from '@/data/products';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(''); // Replace with your real publishable key

// Placeholder components for new pages
const CheckoutPage = () => {
  const { state } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayNow = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: state.items }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to create session');
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe.js failed to load.');
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (err: any) {
      setError(err.message || 'Payment failed.');
      setLoading(false);
    }
  };

  return (
    <div className="w-dvw bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col justify-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 py-12 px-2 md:px-8">
        {/* Cart Items List */}
        <div className="flex-1 bg-white/80 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col overflow-hidden">
          <h2 className="text-4xl font-bold mb-8 text-amber-900 tracking-tight text-center">Checkout</h2>
          {state.items.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {state.items.map(item => (
                <div key={item.product.id} className="flex items-center gap-4 bg-amber-50 rounded-xl p-4 shadow-sm">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-28 object-cover rounded-lg border border-amber-200 shadow"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-lg text-amber-900">{item.product.name}</div>
                    <div className="text-sm text-gray-500 mb-1">x {item.quantity}</div>
                    <div className="text-amber-700 font-bold text-lg">₹{(item.product.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Summary Card */}
        <div className="w-full md:w-96 bg-amber-100 rounded-2xl p-8 flex flex-col items-center shadow-xl self-start mt-8 md:mt-0">
          <div className="text-2xl font-bold mb-6 text-amber-900">Order Summary</div>
          <div className="flex flex-col gap-2 w-full mb-6">
            {state.items.map(item => (
              <div key={item.product.id} className="flex justify-between text-amber-800">
                <span>{item.product.name} <span className="text-xs text-gray-400">x{item.quantity}</span></span>
                <span>₹{(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full text-xl font-bold mb-6 border-t border-amber-300 pt-4">
            <span>Total:</span>
            <span className="text-amber-900">₹{state.total.toFixed(2)}</span>
          </div>
          {error && <div className="text-red-600 mb-4 w-full text-center">{error}</div>}
          <button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold w-full text-lg shadow-lg transition disabled:opacity-60 mb-4"
            onClick={handlePayNow}
            disabled={loading || state.items.length === 0}
          >
            {loading ? 'Redirecting to Stripe...' : 'Pay Now'}
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center pb-12 mt-4">
        <button
          className="text-amber-700 hover:text-amber-900 font-semibold text-lg flex items-center gap-2 bg-white/80 rounded-full px-6 py-3 shadow"
          onClick={() => navigate('/')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Shop
        </button>
      </div>
    </div>
  );
};
const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold mb-4 text-green-700">Payment Successful!</h2>
      <p>Your payment was successful.</p>
      <button
        className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold text-lg"
        onClick={() => navigate('/')}
      >
        Go Back to Homepage
      </button>
    </div>
  );
};
const PaymentFailurePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold mb-4 text-red-700">Payment Failed</h2>
      <p>There was an issue with your payment. Please try again.</p>
      <button
        className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold text-lg"
        onClick={() => navigate('/')}
      >
        Go Back to Homepage
      </button>
    </div>
  );
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const [showGoBack, setShowGoBack] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
  }, [searchQuery]);

  const handleExploreClick = () => {
    setShowHero(false);
    setShowGoBack(true);
    // Scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoBackHome = () => {
    setShowHero(true);
    setShowGoBack(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Header 
          onSearch={setSearchQuery} 
          onCartClick={() => setIsCartOpen(true)}
        />
        <Routes>
          <Route path="/" element={
            <main className="container mx-auto px-4 py-12">
              {showHero && (
                <Hero onExploreClick={handleExploreClick} />
              )}
              {showGoBack && !showHero && (
                <div className="flex justify-center mb-8">
                  <button
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold text-lg"
                    onClick={handleGoBackHome}
                  >
                    Go Back to Homepage
                  </button>
                </div>
              )}
              <FeaturedSection 
                products={products}
                onProductClick={setSelectedProduct}
              />
              <div id="products-section" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-amber-900 mb-4">Complete Collection</h2>
                  <p className="text-amber-700 text-lg">Browse our entire selection of carefully curated books</p>
                </div>
                <div className="mb-6">
                  <p className="text-amber-600">
                    {searchQuery ? `${filteredProducts.length} results for "${searchQuery}"` : 
                     `${filteredProducts.length} products available`}
                  </p>
                </div>
                <ProductGrid 
                  products={filteredProducts}
                  onProductClick={setSelectedProduct}
                />
              </div>
            </main>
          } />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/payment-failure" element={<PaymentFailurePage />} />
        </Routes>
        <ProductDetail
          product={selectedProduct}
          open={!!selectedProduct}
          onOpenChange={(open) => !open && setSelectedProduct(null)}
        />
        <CartSheet
          open={isCartOpen}
          onOpenChange={setIsCartOpen}
        />
      </div>
    </CartProvider>
  );
}

export default App;