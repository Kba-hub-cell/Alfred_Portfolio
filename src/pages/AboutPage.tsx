import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const AboutPage = () => {
  return (
    <div className="pt-28 pb-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="My journey, experience, and passion for data science"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-28">
              <img 
                src="/public/profile.jpg" 
                alt="Profile" 
                className="w-full h-50 object-cover object-center" 
              />
              <div className="p-6">
                <h2 className="text-2xl font-heading font-bold text-primary-800 mb-2">Kwami Alfred Jordal BIAM</h2>
                <p className="text-accent-400 font-medium mb-4"> Data analyse|| Data Science|| Web Dev Student || AI & Sustainable development enthusiast </p>

                <div className="flex flex-col space-y-2 mb-6">
                  <div className="flex items-center text-neutral-700">
                    <span className="text-neutral-500 mr-2">Location:</span>
                    <span>Casablanca, Morocco</span>
                  </div>
                  <div className="flex items-center text-neutral-700">
                    <span className="text-neutral-500 mr-2">Email:</span>
                    <a href="mailto:Kwamialfredjordal.biam@centrale-casablanca.ma" className="text-accent-400 hover:underline">
                      Kwamialfredjordal.biam@centrale-casablanca.ma
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <a 
                    href="https://www.linkedin.com/in/kwamialfredjordalbiam/" 
                    className="bg-[#0A66C2] text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://github.com/Kba-hub-cell" 
                    className="bg-[#171515] text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="mailto:Kwamialfredjordal.biam@centrale-casablanca.ma" 
                    className="bg-neutral-700 text-white p-2 rounded-full hover:bg-neutral-800 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
                
                <Button 
                  leftIcon={<Download size={16} />}
                  className="w-full"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary-800 mb-4">Professional Summary</h3>
              <p className="text-neutral-700 mb-4 leading-relaxed">
               Currently pursuing a General Engineering bachelor degree at École Centrale Casablanca, I am a curious and proactive student with a strong interest in technology, data science, and sustainable development. I thrive in dynamic environments where I can contribute to meaningful projects while continuously expanding my skills. I am particularly motivated by international and interdisciplinary experiences that allow me to grow both personally and professionally.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                My approach combines strong technical skills with business acumen, allowing me to transform raw data into meaningful narratives that stakeholders can understand and act upon. I'm constantly expanding my knowledge in emerging techniques and technologies in the field of data science.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary-800 mb-6">Work Experience</h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-accent-300 pb-2">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent-300"></div>
                  <h4 className="text-xl font-heading font-semibold text-primary-700">Senior Data Scientist</h4>
                  <p className="text-accent-400 mb-2">TechCorp Inc. | 2020 - Present</p>
                  <ul className="list-disc list-inside text-neutral-700 space-y-2">
                    <li>Led a team of 5 data scientists in developing predictive models that increased customer retention by 25%</li>
                    <li>Implemented natural language processing solutions to analyze customer feedback, identifying key areas for product improvement</li>
                    <li>Collaborated with product and engineering teams to integrate machine learning models into production systems</li>
                    <li>Presented data insights to C-level executives, influencing strategic business decisions</li>
                  </ul>
                </div>
                
                <div className="relative pl-8 border-l-2 border-accent-300 pb-2">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent-300"></div>
                  <h4 className="text-xl font-heading font-semibold text-primary-700">Data Scientist</h4>
                  <p className="text-accent-400 mb-2">DataDriven Solutions | 2018 - 2020</p>
                  <ul className="list-disc list-inside text-neutral-700 space-y-2">
                    <li>Developed classification algorithms to automate customer segmentation, increasing marketing ROI by 15%</li>
                    <li>Built a dashboard for real-time visualization of key business metrics using Python and Tableau</li>
                    <li>Conducted A/B testing to optimize website conversion rates, resulting in a 10% increase in sign-ups</li>
                  </ul>
                </div>
                
                <div className="relative pl-8 border-l-2 border-accent-300">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent-300"></div>
                  <h4 className="text-xl font-heading font-semibold text-primary-700">Data Analyst</h4>
                  <p className="text-accent-400 mb-2">Analytics First | 2016 - 2018</p>
                  <ul className="list-disc list-inside text-neutral-700 space-y-2">
                    <li>Performed exploratory data analysis to identify patterns and trends in user behavior</li>
                    <li>Created automated reports for tracking KPIs across different business units</li>
                    <li>Collaborated with the marketing team to optimize campaign performance through data analysis</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-heading font-bold text-primary-800 mb-6">Education & Certifications</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-heading font-semibold text-primary-700">Master of Science in Data Science</h4>
                  <p className="text-accent-400 mb-1">Stanford University | 2014 - 2016</p>
                  <p className="text-neutral-700">Specialized in Machine Learning and Statistical Methods</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-heading font-semibold text-primary-700">Bachelor of Science in Computer Science</h4>
                  <p className="text-accent-400 mb-1">MIT | 2010 - 2014</p>
                  <p className="text-neutral-700">Minor in Mathematics, Dean's List</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-heading font-semibold text-primary-700">Certifications</h4>
                  <ul className="list-disc list-inside text-neutral-700 space-y-2 mt-2">
                    <li>Google Professional Data Engineer</li>
                    <li>AWS Certified Machine Learning - Specialty</li>
                    <li>Deep Learning Specialization - Coursera</li>
                    <li>TensorFlow Developer Certificate</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;