/**
 * @swagger
 * components:
 *   schemas:
 *     Vaccine_Optional:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *         vaccine_name:
 *           type: string
 *         expire:
 *           type: string
 *           format: date
 *         attendance_date:
 *           type: string
 *           format: date
 *         hospital_name:
 *           type: string
 *         dose_user:
 *           type: array
 *           items:
 *             type: string
 *         dose_require:
 *           type: number
 *         hospital:
 *           type: string
 *         priority:
 *           type: number
 *         flag:
 *           type: boolean
 */

/**
 * @swagger
 * tags:
 *   name: Vaccine_Optional
 *   description: Operations related to vaccines
 */

/**
 * @swagger
 * /api/vaccine_optional:
 *   get:
 *     summary: Get all vaccine data
 *     tags: [Vaccine_Optional]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: []
 */

/**
 * @swagger
 * /api/vaccine_optional:
 *   post:
 *     summary: Create a new vaccine record
 *     tags: [Vaccine_Optional]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vaccine_Optional'
 *     responses:
 *       201:
 *         description: Created successfully
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /api/vaccine_optional/{id}:
 *   put:
 *     summary: Update a vaccine record by ID
 *     tags: [Vaccine_Optional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the vaccine to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vaccine_EPI'
 *     responses:
 *       200:
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vaccine_EPI'
 *       404:
 *         description: Vaccine Optional not found
 *         content:
 *           application/json:
 *             example:
 *               message: Vaccine Optional not found
 */

/**
 * @swagger
 * /api/vaccine_optional/{id}:
 *   delete:
 *     summary: Delete a vaccine record by ID
 *     tags: [Vaccine_Optional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the vaccine to delete
 *     responses:
 *       200:
 *         description: Vaccine Optional deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Vaccine Optional deleted successfully
 *       404:
 *         description: Vaccine Optional not found
 *         content:
 *           application/json:
 *             example:
 *               message: Vaccine Optional not found
 */

/**
 * @swagger
 * /api/vaccine_optional/search-vaccine-optional-by-priority:
 *   get:
 *     summary: Get all vaccine data
 *     tags: [Vaccine_Optional]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: []
 */

/**
 * @swagger
 * /api/vaccine_optional/search-single-vaccine-optional/{id}:
 *   get:
 *     summary: Get a single Vaccine Optional by ID
 *     tags: [Vaccine_Optional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Vaccine Optional to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vaccine_Optional'
 *       400:
 *         description: Invalid ID format
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid ID format
 *       404:
 *         description: Vaccine Optional not found
 *         content:
 *           application/json:
 *             example:
 *               message: Vaccine Optional not found
 */
