import React from 'react';
import { Link } from 'react-router-dom';
import { HiCalendar, HiUser, HiClock, HiArrowRight } from 'react-icons/hi';
import { FaImage } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <article className="blog-card">
      <Link to={`/blog/${blog.id}`}>
        {blog.image ? (
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-card__image"
          />
        ) : (
          <div className="blog-card__image-placeholder">
            <FaImage />
          </div>
        )}
      </Link>

      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="blog-card__category">{blog.category}</span>
          <span className="blog-card__date">
            <HiCalendar className="icon" />
            {formatDate(blog.date)}
          </span>
        </div>

        <Link to={`/blog/${blog.id}`}>
          <h3 className="blog-card__title">{blog.title}</h3>
        </Link>

        <p className="blog-card__excerpt">{blog.excerpt}</p>

        {blog.tags && blog.tags.length > 0 && (
          <div className="blog-card__tags">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="blog-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="blog-card__footer">
        <Link to={`/blog/${blog.id}`} className="blog-card__read-more">
          Read More
          <HiArrowRight className="icon" />
        </Link>
        {blog.readTime && (
          <span className="blog-card__read-time">
            <HiClock className="icon" />
            {blog.readTime}
          </span>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
