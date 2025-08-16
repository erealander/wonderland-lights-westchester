import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold text-white mb-4">
          Ready To Have The Best
        </h2>
        <h3 className="text-5xl font-bold text-primary mb-8">
          Holiday Season Ever!?
        </h3>
        
        <Button 
          asChild
          size="lg"
          className="bg-primary text-white hover:bg-primary/90 px-12 py-6 text-2xl font-semibold"
        >
          <Link to="/contact">Get A Fast Quote</Link>
        </Button>
      </div>
    </section>
  );
};