
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Place ANTLAND in Your Garden",
      description: "Position ANTLAND traps near plants or in areas where you've spotted termite activity.",
      image: "/step1.png",
      placeholder: "https://placehold.co/600x400/22c55e/ffffff?text=Place+ANTLAND"
    },
    {
      number: "02",
      title: "Termites are Attracted",
      description: "Our eco-friendly attractant draws termites into the trap without harming beneficial insects.",
      image: "/step2.png",
      placeholder: "https://placehold.co/600x400/22c55e/ffffff?text=Attract+Termites"
    },
    {
      number: "03",
      title: "Convert to Organic Matter",
      description: "The captured termites naturally break down, becoming nutrient-rich organic material.",
      image: "/step3.png",
      placeholder: "https://placehold.co/600x400/22c55e/ffffff?text=Organic+Conversion"
    },
    {
      number: "04",
      title: "Enrich Your Soil",
      description: "The resulting organic fertilizer releases nutrients directly to your plant roots.",
      image: "/step4.png",
      placeholder: "https://placehold.co/600x400/22c55e/ffffff?text=Enrich+Soil"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">How ANTLAND Works</h2>
          <p className="text-muted-foreground text-lg">
            Our simple four-step process protects your plants while naturally enriching your soil
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "grid md:grid-cols-2 gap-8 items-center",
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "slide-up",
                index % 2 === 1 ? "md:order-2" : ""
              )}>
                <div className="mb-4 flex items-center">
                  <span className="text-5xl font-bold text-primary/20 mr-4">{step.number}</span>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    <span>Easy to implement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    <span>No maintenance needed</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    <span>Completely natural process</span>
                  </li>
                </ul>
              </div>
              <div className={cn(
                "fade-in relative",
                index % 2 === 1 ? "md:order-1" : ""
              )}>
                <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = step.placeholder;
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-lg shadow-md border border-primary/20">
                  <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
