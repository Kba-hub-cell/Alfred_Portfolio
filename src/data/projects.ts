import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    summary: 'A machine learning model to predict customer churn with 93% accuracy',
    description: 'Built a predictive model using Random Forest to identify customers likely to churn. This project involved extensive exploratory data analysis, feature engineering, and model optimization.',
    date: 'March 2023',
    tags: ['Machine Learning', 'Classification', 'Python', 'Scikit-Learn'],
    coverImage: 'https://images.pexels.com/photos/7947779/pexels-photo-7947779.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    featured: true,
    github: 'https://github.com/example/customer-churn',
    liveDemo: 'https://example.com/churn-demo'
  },
  {
    id: 'sales-forecasting',
    title: 'Time Series Sales Forecasting',
    summary: 'Developed a time series model to forecast retail sales with 95% accuracy',
    description: 'Implemented an ARIMA model to forecast retail sales for a large e-commerce platform. The model helped optimize inventory management and marketing strategies.',
    date: 'January 2023',
    tags: ['Time Series', 'Forecasting', 'Python', 'ARIMA'],
    coverImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    featured: true,
    github: 'https://github.com/example/sales-forecast'
  },
  {
    id: 'sentiment-analysis',
    title: 'Social Media Sentiment Analysis',
    summary: 'NLP model that analyzes customer sentiment from social media data',
    description: 'Built a natural language processing pipeline to analyze customer sentiment from Twitter data. The model identifies positive, negative, and neutral sentiments with high accuracy.',
    date: 'November 2022',
    tags: ['NLP', 'Sentiment Analysis', 'Python', 'BERT'],
    coverImage: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    featured: true,
    github: 'https://github.com/example/sentiment-analysis'
  },
  {
    id: 'recommendation-system',
    title: 'Product Recommendation Engine',
    summary: 'Collaborative filtering algorithm for personalized product recommendations',
    description: 'Designed and implemented a collaborative filtering recommendation system for an e-commerce platform. The system increased conversion rates by 18%.',
    date: 'September 2022',
    tags: ['Recommendation Systems', 'Collaborative Filtering', 'Python', 'PySpark'],
    coverImage: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    featured: false,
    github: 'https://github.com/example/recommendation-engine'
  },
  {
    id: 'image-classification',
    title: 'Medical Image Classification',
    summary: 'CNN model for classifying medical images with 92% accuracy',
    description: 'Developed a convolutional neural network for classifying medical images. The model helps medical professionals in diagnosing diseases from X-ray images.',
    date: 'July 2022',
    tags: ['Computer Vision', 'CNN', 'Python', 'TensorFlow'],
    coverImage: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    featured: false,
    github: 'https://github.com/example/medical-image-classifier'
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    summary: 'Anomaly detection system for identifying fraudulent transactions',
    description: 'Implemented an anomaly detection system using isolation forest algorithm to identify fraudulent credit card transactions in real-time.',
    date: 'May 2022',
    tags: ['Anomaly Detection', 'Fraud Prevention', 'Python', 'Isolation Forest'],
    coverImage: 'https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    featured: false,
    github: 'https://github.com/example/fraud-detection'
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation Analysis',
    summary: 'K-means clustering to segment customers based on behavior',
    description: 'Used K-means clustering algorithm to segment customers based on their purchasing behavior. The segmentation helped in personalizing marketing campaigns.',
    date: 'March 2022',
    tags: ['Clustering', 'Customer Analytics', 'Python', 'K-means'],
    coverImage: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    featured: false,
    github: 'https://github.com/example/customer-segmentation'
  },
  {
    id: 'stock-prediction',
    title: 'Stock Price Prediction',
    summary: 'LSTM neural network for predicting stock market trends',
    description: 'Built a long short-term memory (LSTM) neural network to predict stock prices. The model analyzes historical price data to forecast future trends.',
    date: 'January 2022',
    tags: ['Time Series', 'LSTM', 'Python', 'Keras'],
    coverImage: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    featured: false,
    github: 'https://github.com/example/stock-prediction'
  }
];