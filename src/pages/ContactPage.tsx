import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-28 pb-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to work together? Feel free to reach out!"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold text-primary-800 mb-6">
                Send Me a Message
              </h2>
              <ContactForm />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h2 className="text-2xl font-heading font-bold text-primary-800 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-accent-50 p-3 rounded-md text-accent-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-800 mb-1">Email</h3>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-neutral-600 hover:text-accent-400 transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-accent-50 p-3 rounded-md text-accent-400 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-800 mb-1">Phone</h3>
                    <a 
                      href="tel:+14155551234" 
                      className="text-neutral-600 hover:text-accent-400 transition-colors"
                    >
                      +1 (415) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-accent-50 p-3 rounded-md text-accent-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-800 mb-1">Location</h3>
                    <p className="text-neutral-600">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium text-primary-800 mb-4">Working Hours</h3>
                <div className="space-y-2 text-neutral-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;