import React, { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onSearch: (query: string) => void;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div>
            <h1 className="text-2xl font-bold text-amber-900">
                BookVerse
              </h1>
              
              <p className="text-xs text-amber-700">Premium Bookstore</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search books, authors, genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-amber-200 focus:border-amber-400 rounded-lg"
              />
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onCartClick}
              className="relative p-2 bg-transparent hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-full"
              aria-label="View Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {state.itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-amber-600 text-white text-xs">
                  {state.itemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};