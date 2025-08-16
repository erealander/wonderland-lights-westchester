import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Wonderland Holiday Lights" 
            className="h-12 w-auto"
          />
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-primary transition-colors border-b-2 border-primary">Home</Link>
          <a href="#" className="text-white hover:text-primary transition-colors">About</a>
          <div className="relative group">
            <a href="#" className="text-white hover:text-primary transition-colors">Christmas Lighting</a>
          </div>
          <a href="#" className="text-white hover:text-primary transition-colors">Permanent Lighting</a>
          <a href="#" className="text-white hover:text-primary transition-colors">Blog</a>
          <a href="#" className="text-white hover:text-primary transition-colors">Locations</a>
          <Link to="/contact" className="text-white hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            asChild
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
          >
            <Link to="/contact">Get A Fast Quote</Link>
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
          >
            <Phone className="w-4 h-4 mr-2" />
            (914) 555-0123
          </Button>
        </div>
      </div>
    </nav>
  );
};