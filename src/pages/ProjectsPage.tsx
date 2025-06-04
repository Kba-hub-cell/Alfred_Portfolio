import { useState, useEffect } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import { projects } from '../data/projects';
import { Project } from '../types/project';

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Extract unique categories from projects
  const categories = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  useEffect(() => {
    let result = [...projects];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(project => project.tags.includes(selectedCategory));
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(term) || 
          project.summary.toLowerCase().includes(term) ||
          project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredProjects(result);
  }, [selectedCategory, searchTerm]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Projects"
          subtitle="A collection of my data science projects showcasing various skills and techniques"
        />
        
        <ProjectFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
        />
        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-neutral-700 mb-2">No projects found</h3>
            <p className="text-neutral-500">
              Try changing your search criteria or check back later for new projects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;