import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import BlogCard from '../components/blog/BlogCard';
import { blogs } from '../data/blogs';
import { Blog } from '../types/blog';

const BlogPage = () => {
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs);
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Extract unique tags from blogs
  const tags = ['All', ...Array.from(new Set(blogs.flatMap(blog => blog.tags)))];
  
  useEffect(() => {
    let result = [...blogs];
    
    // Filter by tag
    if (selectedTag !== 'All') {
      result = result.filter(blog => blog.tags.includes(selectedTag));
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        blog => 
          blog.title.toLowerCase().includes(term) || 
          blog.excerpt.toLowerCase().includes(term) ||
          blog.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredBlogs(result);
  }, [selectedTag, searchTerm]);
  
  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Blog & Personal Projects"
          subtitle="Articles, tutorials, and personal projects beyond data science"
        />
        
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="px-4 py-2 w-full rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-300"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-accent-300 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-neutral-700 mb-2">No articles found</h3>
            <p className="text-neutral-500">
              Try changing your search criteria or check back later for new content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;