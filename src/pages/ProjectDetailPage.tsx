import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import CodeSnippet from '../components/projects/ProjectDetail/CodeSnippet';
import ProjectChart from '../components/projects/ProjectDetail/ProjectChart';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import NotFoundPage from './NotFoundPage';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-28 pb-20 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-400"></div>
      </div>
    );
  }

  if (!project) {
    return <NotFoundPage />;
  }

  // Sample data for the charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Model Accuracy',
        data: [78, 81, 80, 85, 88, 93],
        borderColor: '#2C74B3',
        backgroundColor: 'rgba(44, 116, 179, 0.2)',
        tension: 0.3,
      },
      {
        label: 'Baseline',
        data: [75, 76, 77, 78, 78, 79],
        borderColor: '#57C5B6',
        backgroundColor: 'rgba(87, 197, 182, 0.2)',
        tension: 0.3,
      }
    ],
  };

  const pieChartData = {
    labels: ['Class A', 'Class B', 'Class C', 'Class D'],
    datasets: [
      {
        data: [35, 25, 22, 18],
        backgroundColor: [
          '#2C74B3', 
          '#57C5B6',
          '#144272', 
          '#0A2647'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/projects" className="inline-flex items-center text-accent-400 hover:text-accent-500 mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="h-64 sm:h-80 md:h-96 overflow-hidden relative">
            <img 
              src={project.coverImage} 
              alt={project.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-neutral-600 mb-6 gap-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-accent-400" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center">
                  <Tag size={16} className="mr-2 text-accent-400" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <Button 
                      rightIcon={<ExternalLink size={16} />}
                    >
                      Live Demo
                    </Button>
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline"
                      rightIcon={<Github size={16} />}
                    >
                      View Code
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8"
            >
              <h2 className="text-2xl font-heading font-bold text-primary-800 mb-6">Project Overview</h2>
              <div className="prose text-neutral-700">
                <p className="mb-4">
                  {project.description}
                </p>
                <h3 className="text-xl font-heading font-bold text-primary-700 mt-6 mb-3">Challenge</h3>
                <p className="mb-4">
                  The challenge was to analyze a large dataset of customer behavior to predict which customers were likely to churn in the next month. With over a million records and 50+ features, the data required significant preprocessing and feature engineering.
                </p>
                <h3 className="text-xl font-heading font-bold text-primary-700 mt-6 mb-3">Approach</h3>
                <p className="mb-4">
                  I approached this problem through the following steps:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Performed exploratory data analysis to understand patterns and distributions</li>
                  <li>Conducted feature engineering to create more predictive variables</li>
                  <li>Built and compared multiple machine learning models including Random Forest, XGBoost, and Logistic Regression</li>
                  <li>Optimized the best performing model using hyperparameter tuning</li>
                  <li>Implemented the model in a production environment</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8"
            >
              <h2 className="text-2xl font-heading font-bold text-primary-800 mb-6">Results & Visualizations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ProjectChart 
                  type="line" 
                  data={lineChartData} 
                  title="Model Performance Over Time"
                  description="The accuracy improved significantly after feature engineering and hyperparameter tuning."
                />
                <ProjectChart 
                  type="pie" 
                  data={pieChartData} 
                  title="Data Distribution by Class"
                  description="Distribution of samples across different classes in the dataset."
                />
              </div>
              
              <div className="prose text-neutral-700">
                <p>
                  The model achieved 93% accuracy on the test set, a significant improvement over the baseline of 78%. Most importantly, the model was able to identify 85% of customers who would churn, allowing the business to take proactive retention measures.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-primary-800 mb-6">Code Snippets</h2>
              
              <CodeSnippet 
                language="python"
                title="Data Preprocessing"
                code={`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

# Load and prepare data
def preprocess_data(file_path):
    df = pd.read_csv(file_path)
    
    # Handle missing values
    df.fillna(df.mean(), inplace=True)
    
    # Feature engineering
    df['account_age'] = (pd.to_datetime('now') - pd.to_datetime(df['account_creation_date'])).dt.days
    df['usage_ratio'] = df['actual_usage'] / df['predicted_usage']
    
    # Encode categorical variables
    df = pd.get_dummies(df, columns=['plan_type', 'region'])
    
    # Split features and target
    X = df.drop(['customer_id', 'churn'], axis=1)
    y = df['churn']
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Scale features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    return X_train_scaled, X_test_scaled, y_train, y_test

# Usage
X_train, X_test, y_train, y_test = preprocess_data('customer_data.csv')`}
              />
              
              <CodeSnippet 
                language="python"
                title="Model Training & Evaluation"
                code={`from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import matplotlib.pyplot as plt
import seaborn as sns

def train_evaluate_model(X_train, X_test, y_train, y_test):
    # Train model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Make predictions
    y_pred = model.predict(X_test)
    
    # Evaluate model
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)
    
    print(f'Accuracy: {accuracy:.4f}')
    print(f'Precision: {precision:.4f}')
    print(f'Recall: {recall:.4f}')
    print(f'F1 Score: {f1:.4f}')
    
    # Feature importance
    importances = model.feature_importances_
    indices = np.argsort(importances)[::-1]
    
    plt.figure(figsize=(10, 6))
    plt.title('Feature Importances')
    plt.bar(range(X_train.shape[1]), importances[indices], align='center')
    plt.xticks(range(X_train.shape[1]), X_train.columns[indices], rotation=90)
    plt.tight_layout()
    plt.show()
    
    return model

# Usage
model = train_evaluate_model(X_train, X_test, y_train, y_test)`}
              />
            </motion.div>
          </div>
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 sticky top-28"
            >
              <h3 className="text-xl font-heading font-bold text-primary-800 mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 mb-1">Project Duration</h4>
                  <p className="text-neutral-800">3 months (Jan 2023 - Mar 2023)</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 mb-1">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded">Python</span>
                    <span className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded">Scikit-Learn</span>
                    <span className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded">Pandas</span>
                    <span className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded">Matplotlib</span>
                    <span className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded">Seaborn</span>
                    <span className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded">SQL</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 mb-1">Methods Used</h4>
                  <ul className="list-disc list-inside text-neutral-800 space-y-1">
                    <li>Random Forest Classification</li>
                    <li>Feature Engineering</li>
                    <li>Cross-Validation</li>
                    <li>Hyperparameter Tuning</li>
                    <li>Exploratory Data Analysis</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 mb-1">Key Outcomes</h4>
                  <ul className="list-disc list-inside text-neutral-800 space-y-1">
                    <li>93% prediction accuracy</li>
                    <li>Identified key drivers of customer churn</li>
                    <li>Reduced customer churn by 15%</li>
                    <li>Increased customer retention value by $2.3M annually</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-heading font-bold text-primary-800 mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {projects
                    .filter(p => p.id !== id && p.tags.some(tag => project.tags.includes(tag)))
                    .slice(0, 3)
                    .map((relatedProject) => (
                      <Link 
                        key={relatedProject.id} 
                        to={`/projects/${relatedProject.id}`}
                        className="block p-3 rounded-md hover:bg-neutral-50 transition-colors"
                      >
                        <h4 className="text-primary-700 font-medium hover:text-accent-400 transition-colors">
                          {relatedProject.title}
                        </h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {relatedProject.tags.slice(0, 2).map((tag, i) => (
                            <span 
                              key={i} 
                              className="px-1.5 py-0.5 bg-primary-50 text-primary-600 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;