/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *         password:
 *           type: string
 *         email:
 *           type: string
 *         name:
 *           type: string
 *         lastname:
 *           type: string
 *         nation_id:
 *           type: number
 *         gender:
 *           type: string
 *           enum: ['ชาย', 'หญิง']
 *         phone_no:
 *           type: string
 *       required:
 *         - user_id
 *         - password
 *         - email
 *         - name
 *         - lastname
 *         - nation_id
 *         - gender
 *         - phone_no
 */

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operations related to users
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             example: []
 */

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operations related to users
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: User registered successfully
 *       '400':
 *         description: Bad request, check request body
 */

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operations related to users
 * /api/users/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - user_id
 *               - password
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *       '401':
 *         description: Unauthorized, invalid credentials
 */

