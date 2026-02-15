import React, { useState, useMemo } from 'react';
import { HiSearch, HiDocument } from 'react-icons/hi';
import useFetch from '../hooks/useFetch';
import Loader from '../components/common/Loader';
import BlogCard from '../components/blog/BlogCard';

const BlogList = () => {
  const { data: blogs, loading } = useFetch('/data/blogs.json');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = useMemo(() => {
    if (!blogs) return ['All'];
    const uniqueCategories = [...new Set(blogs.map(blog => blog.category))];
    return ['All', ...uniqueCategories];
  }, [blogs]);

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    if (!blogs) return [];

    return blogs.filter(blog => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchTerm, selectedCategory]);

  if (loading) {
    return <Loader fullScreen />;
  }

  return (
    <div className="blog-list-page">
      <div className="blog-list-page__container">
        <div className="blog-list-page__header">
          <p className="blog-list-page__subtitle">Our Blog</p>
          <h1 className="blog-list-page__title">
            Insights & <span className="highlight">Stories</span>
          </h1>
          <p className="blog-list-page__description">
            Stay updated with the latest trends, tips, and insights from the world of marketing and events.
          </p>
        </div>

        <div className="blog-list-page__search">
          <HiSearch className="icon" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="blog-list-page__filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`blog-list-page__filter-btn ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="blog-list-page__grid">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="blog-list-page__empty">
            <HiDocument className="icon" />
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
