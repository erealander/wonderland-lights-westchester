import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const ServiceIntro = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-white mb-6">
            #1 Christmas Light Installation Westchester County
          </h2>
          <h3 className="text-3xl text-primary mb-8">
            Give Your Family The Best Christmas Ever
          </h3>
          
          <p className="text-lg text-white leading-relaxed mb-8 max-w-4xl mx-auto">
            This holiday season, use the professional services of Wonderland Holiday Lights and give your family the best Christmas ever. We provide a high-quality, safe, and affordable Christmas light installation in Westchester County and Fairfield County. Our all-inclusive service includes free custom design, a free quote, installation, removal, and storage. We are here to take all the stress away and give you a Christmas to remember. Our lights will brighten up your home, your neighborhood, and your family's faces. Have an abundance of joy and magic this holiday season with Wonderland Holiday Lights. Once you have experienced our services, you'll never need anyone else.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            >
              Get Pricing
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
          
          <p className="text-xl text-primary">
            Getting a Quote Only Takes 30 Seconds
          </p>
        </div>
      </div>
    </section>
  );
};