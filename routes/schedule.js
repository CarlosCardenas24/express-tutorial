const express = require('express')
const router = express.Router()

const {
    getShedule,
    createSchedule,
    updateSchedule,
    deleteSchedule
} = require('../controllers/schedule')

router.route('/').get(getShedule).post(createSchedule)
router.route('/:day').put(updateSchedule).delete(deleteSchedule)

module.exports = router