import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Free Custom Design & Quote",
      description: "The first step in using our services is our free custom quote and design. We have professional designers and state-of-the-art technology that can help bring your ideas to life. Whether you need just a little bit of advice or a whole lot of guidance, we&apos;ve got you covered. We&apos;ll help you find the perfect holiday light design for your home. We&apos;ll then provide a free quote for the design, which comes without any obligation!"
    },
    {
      number: "2", 
      title: "We Provide All Lights & Supplies",
      description: "One of the best parts about using Wonderland Holiday Lights for your holiday lighting display is that we provide everything you might need. The lights, the fixtures, the fittings, and all other supplies specific to your design are included with our services. We own the lights and are leasing them to you as a part of our all-in-one service package. This means that you never have to worry about joining the holiday shopping queues at the store or forgetting anything you need. We supply 100% of what&apos;s needed!"
    },
    {
      number: "3",
      title: "Safe & Professional Installation", 
      description: "Having workers at your home can, understandably, feel a little daunting. After all, your home is one of the most important and expensive things you own, and you don&apos;t want anyone to damage or ruin pieces of your property. However, when you use Wonderland Holiday Lights, we guarantee the safest and most professional holiday light installation in Westchester County and Fairfield County. Our crew is fully trained and qualified to handle any job without causing any damage to your house!"
    },
    {
      number: "4",
      title: "Free Maintenance Calls If Needed",
      description: "While it is not a common occurrence, from time to time, a bulb may blow, flicker, break, or part of your lights might get knocked down due to the weather or animals. If this happens, we&apos;ll be there to come to fix the problem free of charge! All of our light installations come with a warranty, so if you ever need us, just give us a call, and we&apos;ll come out as soon as possible to rectify whatever issue you have."
    },
    {
      number: "5",
      title: "Safely Remove & Store Everything",
      description: "When the holidays are over, it&apos;s time for the lights to come down! At Wonderland Holiday Lights, we&apos;ll arrange with you whatever time is most convenient for us to come to your home and safely remove any lights or decorations. Just like with the installation, our removal service is swift, safe, and will not disturb you or your home. Additionally, once the lights are down, we&apos;ll take everything away and store it all safely at our facilities, ready for the following year. Never again will you have to find space in your garage or home for lights and fittings!"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Holiday Light Installation Is All Inclusive
          </h2>
          <h3 className="text-2xl text-primary">
            Our Entire Process Explained In 5 Steps
          </h3>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {step.number}. {step.title}
                </h3>
                <p className="text-white leading-relaxed text-lg mb-6">
                  {step.description}
                </p>
                
                {index === 0 && (
                  <div className="flex flex-col sm:flex-row gap-4">
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
                )}
                
                {index === 3 && (
                  <div className="flex flex-col sm:flex-row gap-4">
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
                )}
              </div>
              
              <div className="lg:w-1/2">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Process Image {step.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            Make Your Home The Talk Of The Neighborhood
          </h3>
        </div>
      </div>
    </section>
  );
};