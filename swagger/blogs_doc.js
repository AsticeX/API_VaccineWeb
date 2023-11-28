/**
 * @swagger
 * components:
 *   schemas:
 *     Blogs:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the blog post.
 *         content:
 *           type: object
 *           description: The content of the blog post.
 *         author:
 *           type: string
 *           description: The author of the blog post.
 *         slug:
 *           type: string
 *           description: The slug for the blog post.
 *       required:
 *         - title
 *         - content
 */

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Operations related to blogs
 */

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blog data
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: []
 */

/**
 * @swagger
 * /api/blog/{slug}:
 *   get:
 *     summary: Get one blog data by slug
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Slug of the blog to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 *       404:
 *         description: Blog not found
 *         content:
 *           application/json:
 *             example:
 *               message: Blog not found
 */

/**
 * @swagger
 * /api/create-blog:
 *   post:
 *     summary: Create a new blogs record
 *     tags: [Blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *     responses:
 *       201:
 *         description: Created successfully
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /api/blog/{slug}:
 *   put:
 *     summary: Update a blog record by slug
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: The slug of the blog to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *     responses:
 *       200:
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blogs'
 *       404:
 *         description: blog not found
 *         content:
 *           application/json:
 *             example:
 *               message: blog not found
 */

/**
 * @swagger
 * /api/blog/{slug}:
 *   delete:
 *     summary: Delete a blog record by slug
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: The slug of the blog to delete
 *     responses:
 *       200:
 *         description: blog deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: blog deleted successfully
 *       404:
 *         description: blog not found
 *         content:
 *           application/json:
 *             example:
 *               message: blog not found
 */
