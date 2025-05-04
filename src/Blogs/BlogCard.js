import React from 'react';
import LazyLoad from 'react-lazyload';
import {
  Card,
  CardContent,
  CardMedia,
  SliderValueLabel,
  Typography,
  useTheme,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const BlogCard = ({ blog }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const maxWidth = "xl";

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 345, margin: theme.spacing(2) }}
        onClick={handleClickOpen}
      >
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
          <Typography
            variant="caption"
            display="block"
            sx={{ marginTop: theme.spacing(1) }}
          >
            {new Date(blog.date).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "90%",
            height: "90%",
            maxWidth: "90%",
            padding: 0,
            margin: 0,
            border: 1,
            borderRadius:5,
          },
        }}
      >
        <DialogTitle>
          <Typography>{blog.title}</Typography>
        </DialogTitle>
        <DialogContent>
               
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BlogCard;
