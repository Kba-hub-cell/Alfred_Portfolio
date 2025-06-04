import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">DS<span className="text-accent-300">Portfolio</span></h3>
            <p className="text-neutral-300 mb-4">
              A showcase of data science projects, skills, and professional achievements.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-white hover:text-accent-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-neutral-300 hover:text-accent-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-neutral-300 hover:text-accent-300 transition-colors">About</a>
              </li>
              <li>
                <a href="/projects" className="text-neutral-300 hover:text-accent-300 transition-colors">Projects</a>
              </li>
              <li>
                <a href="/blog" className="text-neutral-300 hover:text-accent-300 transition-colors">Blog</a>
              </li>
              <li>
                <a href="/contact" className="text-neutral-300 hover:text-accent-300 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact</h3>
            <p className="text-neutral-300 mb-2">Email: Kwamialfredjordalbiam@centrale-casablanca.ma</p>
            <p className="text-neutral-300 mb-4">Location: Casablanca, Morocco</p>
            <a 
              href="/contact" 
              className="inline-block px-4 py-2 bg-accent-300 text-white rounded-md hover:bg-accent-400 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-700 text-center text-neutral-400">
          <p>&copy; {currentYear} Alfred Kwami BIAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;