import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Star, Users, Award, Heart } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl mb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-amber-800 px-6 py-3 rounded-full text-sm font-medium shadow-lg">
              <Award className="h-4 w-4 fill-current" />
              Award-Winning Bookstore
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-amber-900 leading-tight">
                Where Stories
                <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                  Come Alive
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-amber-800 leading-relaxed max-w-xl">
                Discover handpicked books that inspire, educate, and transport you to extraordinary worlds. Your next literary adventure awaits.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onExploreClick}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 rounded-2xl border-2 border-amber-300 text-amber-700 hover:bg-white/80 backdrop-blur-sm transition-all duration-300"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">10K+</div>
                <div className="text-sm text-amber-700">Books Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">5K+</div>
                <div className="text-sm text-amber-700">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">4.9</div>
                <div className="text-sm text-amber-700 flex items-center justify-center gap-1">
                  <Star className="h-3 w-3 fill-current text-yellow-500" />
                  Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Book Display */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Main Book Display */}
              <div className="relative">
                {/* Featured Book */}
                <div className="relative w-80 h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-2xl shadow-2xl transform rotate-3 transition-transform duration-300 hover:rotate-6">
                    <div className="p-8 text-white h-full flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-medium mb-3 opacity-80">BESTSELLER</div>
                        <div className="text-2xl font-bold leading-tight mb-2">The Art of Reading</div>
                        <div className="text-sm opacity-90">A Journey Through Literature</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Books */}
                <div className="absolute -top-8 -left-8 w-24 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-xl transform -rotate-12 opacity-80">
                  <div className="p-3 text-white text-xs">
                    <div className="font-bold">Fiction</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-8 w-28 h-36 bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-xl transform rotate-12 opacity-80">
                  <div className="p-3 text-white text-xs">
                    <div className="font-bold">Non-Fiction</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-12 w-20 h-28 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-xl transform rotate-6 opacity-70">
                  <div className="p-2 text-white text-xs">
                    <div className="font-bold">Poetry</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 right-4 animate-bounce">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="h-6 w-6 text-white fill-current" />
                </div>
              </div>
              
              <div className="absolute bottom-8 -left-4 animate-pulse">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center shadow-lg opacity-80">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Features */}
        <div className="mt-20 pt-12 border-t border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-amber-900">Free Shipping</div>
                <div className="text-sm text-amber-700">On orders over ₹1500</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-amber-900">Expert Curation</div>
                <div className="text-sm text-amber-700">Handpicked by literary experts</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-amber-900">30-Day Returns</div>
                <div className="text-sm text-amber-700">Love it or return it</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};