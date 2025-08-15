import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 41, 54, 0.85), rgba(34, 41, 54, 0.85)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          HOLIDAY
          <br />
          <span className="text-6xl lg:text-8xl italic font-bold">LIGHT SERVICES</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Get the best lit home in your neighborhood without lifting a finger
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
          >
            Get A Fast Quote
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
          >
            <Phone className="w-5 h-5 mr-2" />
            (914) 555-0123
          </Button>
        </div>
      </div>
    </section>
  );
};