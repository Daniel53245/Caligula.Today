import React from 'react';
import LazyLoad from 'react-lazyload';
import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';

const BlogCard = ({ blog }) => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 345, margin: theme.spacing(2) }}>
      <LazyLoad height={200} offset={100}>
        <CardMedia
          component="img"
          height="200"
          image={blog.imageUrl}
          alt={blog.title}
        />
      </LazyLoad>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.summary}
        </Typography>
        <Typography variant="caption" display="block" sx={{ marginTop: theme.spacing(1) }}>
          {new Date(blog.date).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
