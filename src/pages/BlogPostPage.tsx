import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';
import { Blog } from '../types/blog';
import { formatDate } from '../utils/formatDate';
import NotFoundPage from './NotFoundPage';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundBlog = blogs.find(b => b.id === id);
    setBlog(foundBlog || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-28 pb-20 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-400"></div>
      </div>
    );
  }

  if (!blog) {
    return <NotFoundPage />;
  }

  return (
    <div className="pt-28 pb-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/blog" className="inline-flex items-center text-accent-400 hover:text-accent-500 mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {blog.coverImage && (
            <div className="h-64 sm:h-80 md:h-96 overflow-hidden">
              <img 
                src={blog.coverImage} 
                alt={blog.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}
          
          <div className="p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-neutral-600 mb-8 gap-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-accent-400" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-accent-400" />
                  <span>{blog.readTime} min read</span>
                </div>
                <div className="flex items-center">
                  <Tag size={16} className="mr-2 text-accent-400" />
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="prose max-w-none text-neutral-700 leading-relaxed">
                <p className="text-lg mb-6">
                  {blog.excerpt}
                </p>
                
                <h2 className="text-2xl font-heading font-bold text-primary-800 mt-8 mb-4">
                  Introduction
                </h2>
                <p className="mb-4">
                  Data visualization is a critical component of any data science workflow. It helps us understand complex datasets, identify patterns, and communicate insights effectively. In this article, we'll explore some advanced visualization techniques using Python's matplotlib and seaborn libraries.
                </p>
                <p className="mb-6">
                  Whether you're a beginner or an experienced data scientist, mastering these visualization techniques will significantly enhance your ability to extract and communicate insights from data.
                </p>
                
                <h2 className="text-2xl font-heading font-bold text-primary-800 mt-8 mb-4">
                  Key Visualization Techniques
                </h2>
                <p className="mb-4">
                  There are several visualization techniques that every data scientist should have in their toolkit. Let's explore some of the most useful ones:
                </p>
                
                <h3 className="text-xl font-heading font-semibold text-primary-700 mt-6 mb-3">
                  1. Distribution Plots
                </h3>
                <p className="mb-4">
                  Distribution plots help us understand how our data is distributed. Histograms, kernel density plots, and box plots are common types of distribution plots. They allow us to identify outliers, skewness, and the central tendency of our data.
                </p>
                <div className="bg-neutral-50 p-4 rounded-md mb-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>
{`import seaborn as sns
import matplotlib.pyplot as plt

# Load a sample dataset
tips = sns.load_dataset("tips")

# Create a histogram
plt.figure(figsize=(10, 6))
sns.histplot(tips['total_bill'], kde=True)
plt.title('Distribution of Total Bill')
plt.xlabel('Total Bill ($)')
plt.ylabel('Frequency')
plt.show()`}
                    </code>
                  </pre>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-primary-700 mt-6 mb-3">
                  2. Relationship Plots
                </h3>
                <p className="mb-4">
                  Relationship plots help us understand the relationship between variables. Scatter plots, line plots, and regression plots are common types of relationship plots. They allow us to identify correlations, trends, and patterns in our data.
                </p>
                <div className="bg-neutral-50 p-4 rounded-md mb-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>
{`# Create a scatter plot
plt.figure(figsize=(10, 6))
sns.scatterplot(x='total_bill', y='tip', hue='time', data=tips)
plt.title('Relationship between Total Bill and Tip')
plt.xlabel('Total Bill ($)')
plt.ylabel('Tip ($)')
plt.show()`}
                    </code>
                  </pre>
                </div>
                
                <h2 className="text-2xl font-heading font-bold text-primary-800 mt-8 mb-4">
                  Advanced Visualization Techniques
                </h2>
                <p className="mb-6">
                  Once you've mastered the basics, you can move on to more advanced visualization techniques that can provide deeper insights into your data.
                </p>
                
                <h3 className="text-xl font-heading font-semibold text-primary-700 mt-6 mb-3">
                  1. Pair Plots
                </h3>
                <p className="mb-4">
                  Pair plots are a great way to visualize relationships between multiple variables at once. They create a grid of scatter plots for all pairs of variables in your dataset, with density plots along the diagonal.
                </p>
                
                <h3 className="text-xl font-heading font-semibold text-primary-700 mt-6 mb-3">
                  2. Heatmaps
                </h3>
                <p className="mb-4">
                  Heatmaps are a powerful way to visualize correlation matrices, confusion matrices, and other two-dimensional data. They use color to represent values, making it easy to identify patterns and relationships.
                </p>
                
                <h2 className="text-2xl font-heading font-bold text-primary-800 mt-8 mb-4">
                  Conclusion
                </h2>
                <p className="mb-4">
                  Data visualization is an essential skill for any data scientist. It helps us understand our data, identify patterns, and communicate insights effectively. By mastering these visualization techniques, you'll be well-equipped to extract meaningful insights from your data.
                </p>
                <p>
                  Remember, the goal of data visualization is not just to create pretty pictures, but to tell a compelling story with your data. Always choose the visualization technique that best communicates the insights you want to share.
                </p>
              </div>
              
              <div className="border-t border-neutral-200 mt-12 pt-8">
                <h3 className="text-xl font-heading font-bold text-primary-800 mb-4">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogs
                    .filter(b => b.id !== id && b.tags.some(tag => blog.tags.includes(tag)))
                    .slice(0, 3)
                    .map((relatedBlog) => (
                      <Link 
                        key={relatedBlog.id} 
                        to={`/blog/${relatedBlog.id}`}
                        className="block bg-neutral-50 p-4 rounded-md hover:bg-neutral-100 transition-colors"
                      >
                        <h4 className="font-heading font-medium text-primary-700 mb-1 hover:text-accent-400 transition-colors">
                          {relatedBlog.title}
                        </h4>
                        <div className="text-sm text-neutral-500 mb-2">
                          {formatDate(relatedBlog.date)} · {relatedBlog.readTime} min read
                        </div>
                        <p className="text-neutral-600 text-sm line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;