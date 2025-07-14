import React from 'react';
import { Minus, Plus, Trash2,} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CartSheet: React.FC<CartSheetProps> = ({ open, onOpenChange }) => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Shopping Cart</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 py-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-4">Add some books to get started!</p>
              <Button onClick={() => onOpenChange(false)} className="bg-amber-600 hover:bg-amber-700">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4 max-h-72 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-transparent">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.product.name}</h4>
                    <p className="text-amber-600 font-bold">₹{item.product.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6 "
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />-
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />+
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.product.id)}
                    className="bg-orange-400 rounded-fulltext-red-500 hover:text-red-700 hover:bg-red-50 flex-shrink-0 "
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />✖
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {state.items.length > 0 && (
          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-amber-900">
                ₹{state.total.toFixed(2)}
              </span>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" onClick={() => { onOpenChange(false); navigate('/checkout'); }}>
                Proceed to Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => dispatch({ type: 'CLEAR_CART' })}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};