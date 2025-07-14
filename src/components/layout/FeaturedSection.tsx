import React from 'react';
import { ProductCard } from '../products/ProductCard';
import { Product } from '@/types';
import { TrendingUp } from 'lucide-react';

interface FeaturedSectionProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ products, onProductClick }) => {
  const featuredProducts = products.filter(p => p.featured);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <TrendingUp className="h-4 w-4" />
          Staff Picks
        </div>
        <h2 className="text-4xl font-bold mb-4 text-amber-900">
          Featured Books
        </h2>
        <p className="text-amber-700 text-lg max-w-2xl mx-auto">
          Handpicked by our literary experts, these books represent the finest in contemporary and classic literature
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </section>
  );
};