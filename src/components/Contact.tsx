import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Talk
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm currently pursuing full-time career and research opportunities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">nathan.jung1248@gmail.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">403-796-8036</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Calgary AB, Canada</p>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="mailto:nathan.jung1248@gmail.com"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
