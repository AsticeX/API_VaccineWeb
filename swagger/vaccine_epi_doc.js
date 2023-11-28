/**
 * @swagger
 * components:
 *   schemas:
 *     Vaccine_EPI:
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
 *   name: Vaccine_EPI
 *   description: Operations related to vaccines
 */

/**
 * @swagger
 * /api/vaccine_epi:
 *   get:
 *     summary: Get all vaccine data
 *     tags: [Vaccine_EPI]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: []
 */

/**
 * @swagger
 * /api/vaccine_epi:
 *   post:
 *     summary: Create a new vaccine record
 *     tags: [Vaccine_EPI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vaccine_EPI'
 *     responses:
 *       201:
 *         description: Created successfully
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /api/vaccine_epi/{id}:
 *   put:
 *     summary: Update a vaccine record by ID
 *     tags: [Vaccine_EPI]
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
 *         description: Vaccine EPI not found
 *         content:
 *           application/json:
 *             example:
 *               message: Vaccine EPI not found
 */

/**
 * @swagger
 * /api/vaccine_epi/{id}:
 *   delete:
 *     summary: Delete a vaccine record by ID
 *     tags: [Vaccine_EPI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the vaccine to delete
 *     responses:
 *       200:
 *         description: Vaccine EPI deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Vaccine EPI deleted successfully
 *       404:
 *         description: Vaccine EPI not found
 *         content:
 *           application/json:
 *             example:
 *               message: Vaccine EPI not found
 */

/**
 * @swagger
 * /api/vaccine_epi/search-vaccine-epi-by-priority:
 *   get:
 *     summary: Get all vaccine data
 *     tags: [Vaccine_EPI]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: []
 */

/**
 * @swagger
 * /api/vaccine_epi/search-single-vaccine-epi/{id}:
 *   get:
 *     summary: Get a single Vaccine EPI by ID
 *     tags: [Vaccine_EPI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Vaccine EPI to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 *       400:
 *         description: Invalid ID format
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid ID format
 *       404:
 *         description: Vaccine EPI not found
 *         content:
 *           application/json:
 *             example:
 *               message: Vaccine EPI not found
 */
