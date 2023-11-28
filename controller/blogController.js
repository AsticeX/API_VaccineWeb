// Connect To Database
const Blogs = require("../models/blogs.js");
const slugify = require("slugify");
const { v4: uuidv4 } = require("uuid");

// Save Data
exports.create = async (req, res, next) => {
  const { title, content, author } = req.body;
  let slug = slugify(title);

  if (!slug) {
    slug = uuidv4();
  }

  if (!title) {
    // Validate
    return res.status(400).json({ error: "Please fill the title" });
  } else if (!content) {
    return res.status(400).json({ error: "Please fill the content" });
  }

  // Create the blog
  Blogs.create({ title, content, author, slug }, (err, blog) => {
    if (err) {
      if (err.code === 11000 || err.code === 11001) {
        // If there's a duplicate key error (MongoDB error codes for duplicate key)
        return res.status(400).json({ error: "Slug already exists, please use a different title" });
      } else {
        // For other errors, return the error response
        return res.status(400).json({ error: err.message });
      }
    }
    res.json(blog);
  });
};

exports.getAllBlogs = (req, res) => {
  Blogs.find({}).exec((err, blogs) => {
    res.json(blogs);
  });
};

exports.singleBlog = (req, res) => {
  const { slug } = req.params;
  Blogs.findOne({ slug }).exec((err, blog) => {
    res.json(blog);
  });
};

exports.remove = (req, res) => {
  const { slug } = req.params;
  Blogs.findOneAndRemove({ slug }).exec((err, blog) => {
    if (err) console.log(err);
    res.json({
      message: "Delete Blog successfully",
    });
  });
};

exports.update = (req, res) => {
  const { slug } = req.params;
  const { title, content, author } = req.body;

  // Use findByIdAndUpdate to update the blog post
  Blogs.findOneAndUpdate(
    { slug: slug }, // Find by slug
    { title: title, content: content, author: author }, // Data to update
    { new: true }, // To return the updated document
    (err, blog) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Error updating the blog" });
      } else {
        res.json(blog);
      }
    }
  );
};
