import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  HiArrowLeft,
  HiCalendar,
  HiUser,
  HiClock,
  HiChevronRight,
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaImage,
} from 'react-icons/fa';
import useFetch from '../hooks/useFetch';
import Loader from '../components/common/Loader';
import BlogCard from '../components/blog/BlogCard';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blogs, loading } = useFetch('/data/blogs.json');

  const blog = useMemo(() => {
    if (!blogs) return null;
    return blogs.find(b => b.id === parseInt(id));
  }, [blogs, id]);

  const relatedBlogs = useMemo(() => {
    if (!blogs || !blog) return [];
    return blogs
      .filter(b => b.id !== blog.id && b.category === blog.category)
      .slice(0, 3);
  }, [blogs, blog]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${title} ${url}`, '_blank');
        break;
      default:
        break;
    }
  };

  if (loading) {
    return <Loader fullScreen />;
  }

  if (!blog) {
    return (
      <div className="blog-detail-page">
        <div className="blog-detail-page__back-btn">
          <Link to="/blog">
            <HiArrowLeft className="icon" />
            Back to Blog
          </Link>
        </div>
        <div className="blog-list-page__empty">
          <h3>Blog post not found</h3>
          <p>The article you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/blog')} className="banner__btn">
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-page__back-btn">
        <Link to="/blog">
          <HiArrowLeft className="icon" />
          Back to Blog
        </Link>
      </div>

      <div className="blog-hero">
        <div className="blog-hero__container">
          <div className="blog-hero__breadcrumb">
            <Link to="/">Home</Link>
            <HiChevronRight className="icon" />
            <Link to="/blog">Blog</Link>
            <HiChevronRight className="icon" />
            <span>{blog.category}</span>
          </div>

          <span className="blog-hero__category">{blog.category}</span>

          <h1 className="blog-hero__title">{blog.title}</h1>

          <div className="blog-hero__meta">
            <div className="blog-hero__meta-item">
              <HiUser className="icon" />
              <span>{blog.author}</span>
            </div>
            <div className="blog-hero__meta-item">
              <HiCalendar className="icon" />
              <span>{formatDate(blog.date)}</span>
            </div>
            {blog.readTime && (
              <div className="blog-hero__meta-item">
                <HiClock className="icon" />
                <span>{blog.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-content__container">
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-content__image"
            />
          ) : (
            <div className="blog-card__image-placeholder">
              <FaImage />
            </div>
          )}

          <div
            className="blog-content__body"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-content__tags">
              <span className="label">Tags:</span>
              {blog.tags.map((tag, index) => (
                <span key={index} className="blog-content__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="blog-content__share">
            <span className="label">Share this article:</span>
            <button
              className="blog-content__share-btn"
              onClick={() => handleShare('facebook')}
              aria-label="Share on Facebook"
            >
              <FaFacebookF />
            </button>
            <button
              className="blog-content__share-btn"
              onClick={() => handleShare('twitter')}
              aria-label="Share on Twitter"
            >
              <FaTwitter />
            </button>
            <button
              className="blog-content__share-btn"
              onClick={() => handleShare('linkedin')}
              aria-label="Share on LinkedIn"
            >
              <FaLinkedinIn />
            </button>
            <button
              className="blog-content__share-btn"
              onClick={() => handleShare('whatsapp')}
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp />
            </button>
          </div>
        </div>
      </div>

      {relatedBlogs.length > 0 && (
        <div className="related-blogs">
          <div className="related-blogs__container">
            <h2 className="related-blogs__title">Related Articles</h2>
            <div className="related-blogs__grid">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
