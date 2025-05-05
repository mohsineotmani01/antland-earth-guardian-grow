
import { Bug, Leaf, Home, ShieldCheck, Sprout, Recycle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Bug className="h-10 w-10 text-primary" />,
      title: "Effective Termite Control",
      description: "Naturally attracts and traps termites, protecting your plants and structures from damage."
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Rich Organic Fertilizer",
      description: "Enhances soil fertility with nutrient-rich organic matter that plants love."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Safe For Family & Pets",
      description: "No harmful chemicals or toxins, making it safe for use around children and animals."
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Indoor & Outdoor Use",
      description: "Versatile design works for garden beds, farms, potted plants, and indoor applications."
    },
    {
      icon: <Sprout className="h-10 w-10 text-primary" />,
      title: "Promotes Healthy Growth",
      description: "Balanced nutrients encourage stronger roots and more vibrant plant development."
    },
    {
      icon: <Recycle className="h-10 w-10 text-primary" />,
      title: "Eco-Friendly Solution",
      description: "Sustainable design reduces environmental impact while solving pest problems."
    }
  ];

  return (
    <section id="features" className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">One Solution, Dual Benefits</h2>
          <p className="text-muted-foreground text-lg">
            ANTLAND combines termite protection with soil enrichment in one innovative product
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border slide-up bg-white dark:bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
