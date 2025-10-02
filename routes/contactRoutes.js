const express = require("express");
const dotenv = require("dotenv").config();
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactsController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
/**
 * @swagger
 * /app/contacts/:
 *    get:
 *        summary: Get all contacts
 *        tags: [Contact]
 *        security:
 *            - bearerAuth: []
 *        responses:
 *            200:
 *              description: List of contacts
 *    post:
 *        summary: Create a new contact
 *        tags: [Contact]
 *        security: 
 *          - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content: 
 *             application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  email:
 *                    type: string
 *                  phone:
 *                    type: string
 *        responses:
 *          201:
 *            description: Contact created
 */
router.route("/").get(getContacts).post(createContact);
/**
 * @swagger
 * /app/contacts/{id}:
 *   get:
 *     summary: Get contact by ID
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Contact ID
 *     responses:
 *       200:
 *         description: Contact details
 *   put:
 *     summary: Update a contact
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Contact ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact updated
 *   delete:
 *     summary: Delete a contact
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Contact ID
 *     responses:
 *       200:
 *         description: Contact deleted
 */
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
