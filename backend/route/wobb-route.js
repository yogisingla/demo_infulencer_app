
const express = require('express');
const router = express.Router();

const WebhookController = require('../controllers/wobb-controller');
const webhookController = new WebhookController();

router.post('/create-gig',webhookController.createGig);
router.post('/create-gg',webhookController.createGg)


module.exports = router;