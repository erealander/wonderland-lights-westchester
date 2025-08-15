import logo from "@/assets/logo.png";
import { Facebook, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-muted">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <img 
            src={logo} 
            alt="Wonderland Holiday Lights" 
            className="h-16 w-auto mx-auto mb-4"
          />
          <p className="text-white text-lg mb-6">
            ©Wonderland Holiday Lights - All Rights Reserved
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="tel:9145550123" 
              className="flex items-center text-white hover:text-primary transition-colors text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              (914) 555-0123
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-white hover:text-primary transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <MapPin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Holiday Light Website Design By Professional Web Services
          </p>
        </div>
        
        <div className="border-t border-muted pt-8">
          <div className="text-center mb-8">
            <h4 className="text-white text-xl font-semibold mb-4">SERVICE AREAS</h4>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-white text-lg">
                Serving Westchester County and Fairfield County
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:9145550123" 
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
            <a 
              href="sms:9145550123" 
              className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Text US
            </a>
            <a 
              href="mailto:info@wonderlandholidaylights.com" 
              className="bg-muted text-white px-6 py-3 rounded-lg font-semibold hover:bg-muted/90 transition-colors flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};