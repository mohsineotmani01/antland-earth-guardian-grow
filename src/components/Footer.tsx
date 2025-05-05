
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent pt-16 pb-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <a href="#" className="inline-block">
                <span className="text-2xl font-bold text-primary tracking-tight">
                  ANT<span className="text-orange-500">LAND</span>
                </span>
              </a>
            </div>
            <p className="text-muted-foreground mb-4">
              The innovative 2-in-1 solution for termite control and organic fertilization. Protect and nourish your garden naturally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-orange-500 transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-orange-500 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-orange-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">ANTLAND Basic</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">ANTLAND Pro Pack</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">ANTLAND for Farms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">ANTLAND Indoor</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Garden Street, Green City, Earth</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0" />
                <span className="text-muted-foreground">info@antland.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* School and Student Information */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 border-t border-b py-6">
          <div className="flex items-center mb-4 md:mb-0 md:mr-12">
            <img 
              src="/lovable-uploads/4b7c3a83-2cd9-47c5-9c0c-8836c7e55064.png" 
              alt="Ecole Supérieure de Technologie Sidi Bennour" 
              className="h-16 mr-4"
            />
            <div className="text-sm">
              <p className="font-semibold text-gray-800">Ecole Supérieure de Technologie</p>
              <p className="text-gray-600">Sidi Bennour</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-semibold text-orange-500">Student:</span> Anass Obada
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-orange-500">Teacher:</span> Blhaje
            </p>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ANTLAND. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
