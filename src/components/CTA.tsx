
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to Transform Your Garden?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Join thousands of satisfied customers who are protecting their plants and enriching their soil with ANTLAND's natural 2-in-1 solution.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Effectively eliminates termite infestations",
                "Provides natural, nutrient-rich fertilizer",
                "Safe for family, pets, and beneficial insects",
                "Easy to use with no maintenance required",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary font-medium group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full bg-primary-foreground/10 absolute inset-0 -z-10"></div>
            <img
              src="/product-cta.png"
              alt="ANTLAND product package"
              className="w-full h-auto rounded-2xl object-cover shadow-lg"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/600x600/ffffff/22c55e?text=ANTLAND+Package';
              }}
            />
            <div className="absolute -top-6 -right-6 bg-white rounded-full shadow-lg p-3">
              <div className="bg-secondary rounded-full text-secondary-foreground h-20 w-20 flex flex-col items-center justify-center text-sm font-bold">
                <span className="text-xl">30%</span>
                <span>OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
