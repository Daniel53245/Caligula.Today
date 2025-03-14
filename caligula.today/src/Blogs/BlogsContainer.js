import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import BlogCard from './BlogCard';
import { Container, CircularProgress, Typography } from '@mui/material';

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching Blogs...");
    fetch('/blogs.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: 'auto' }} />
      ) : error ? (
        <Typography color="error" align="center">
          Failed to load blogs: {error}
        </Typography>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={{ display: 'flex', gap: '16px' }}
        >
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Masonry>
      )}
    </Container>
  );
};

export default BlogContainer;
