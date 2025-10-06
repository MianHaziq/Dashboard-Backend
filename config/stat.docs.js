/**
 * @swagger
 * tags:
 *   name: Stats
 *   description: User statistics APIs
 */

/**
 * @swagger
 * /api/stats:
 *   get:
 *     summary: Get the current user's statistics
 *     tags: [Stats]
 *     operationId: getUserStats
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response with the user's stats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "b6e0aaf7-7e54-4a48-95c7-3b2dd3f1c4d2"
 *                   title:
 *                     type: string
 *                     example: "Article Completed"
 *                   total:
 *                     type: number
 *                     example: 233
 *                   image:
 *                     type: string
 *                     example: "/article.png"
 *                   userId:
 *                     type: string
 *                     example: "a34d4e5b-1c11-4e12-95b2-24a2cd4f97e4"
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Server error
 */
