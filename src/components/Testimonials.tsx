
import { StarIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ANTLAND completely eliminated our termite problem while giving our veggies an amazing growth boost. Two benefits in one product!",
      author: "Sarah J.",
      role: "Home Gardener",
      rating: 5,
      image: "/testimonial1.png"
    },
    {
      quote: "As a farm owner, I was skeptical, but ANTLAND has significantly reduced termite damage to our crops and improved soil quality.",
      author: "Michael T.",
      role: "Farm Owner",
      rating: 5,
      image: "/testimonial2.png"
    },
    {
      quote: "I've tried many solutions for my indoor plants, but ANTLAND is the first that actually worked against termites while being completely safe.",
      author: "Aisha K.",
      role: "Plant Enthusiast",
      rating: 4,
      image: "/testimonial3.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/soil-texture.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied ANTLAND users who are protecting and nourishing their plants naturally
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border slide-up bg-white dark:bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? 'text-secondary fill-secondary'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-muted mr-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/100x100/22c55e/ffffff?text=${testimonial.author.charAt(0)}`;
                        }} 
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
