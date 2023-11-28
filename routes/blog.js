const express = require("express");
const router = express.Router();
const { create, getAllBlogs, singleBlog, remove, update } = require("../controller/blogController");

router.get("/blogs", getAllBlogs);
router.post("/create-blog", create);
router.get("/blog/:slug", singleBlog);
router.delete("/blog/:slug", remove);
router.put("/blog/:slug", update);

module.exports = router;
