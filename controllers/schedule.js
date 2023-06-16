let {schedule} = require('../data')

// get method
const getShedule = (req, res) => {
    res.status(200).json({success: true, data: schedule})
}

// post method
const createSchedule = (req, res) => {
    const {day} = req.body
    const {morning} = req.body
    const {afternoon} = req.body
    const {evening} = req.body

    if (!day) {
        return res.status(400).json({success: false, msg: "pleaase provide a day"})
    }
    if (!morning) {
        return res.status(400).json({success: false, msg: "pleaase provide a morning schedule ('off' or 'code')"})
    }
    if (!afternoon) {
        return res.status(400).json({success: false, msg: "pleaase provide an afternoon schedule ('off' or 'code')"})
    }
    if (!evening) {
        return res.status(400).json({success: false, msg: "pleaase provide an evening schedule ('off' or 'code')"})
    }

    res.status(201).json({success: true, day: day, morning: morning, afternoon: afternoon, evening: evening})
}

// put method
const updateSchedule = (req, res) => {
    const {day} = req.body
    const {morning} = req.body
    const {afternoon} = req.body
    const {evening} = req.body
    
    const scheduled = schedule.find((scheduled) => scheduled.day === day)
    
    if (!scheduled) {
        return res
        .status(400)
        .json({success: false, msg: `no schedule on ${day}`})
    }

    const newSchedule = schedule.map((scheduled) => {
        if(scheduled.day === day) {
            scheduled.morning = morning
            scheduled.afternoon = afternoon
            scheduled.evening = evening
        }
        return scheduled
    })
    res.status(200).json({success: true, data: newSchedule})
}

// delete method
const deleteSchedule = (req, res) => {
    const scheduled = schedule.find((scheduled) => scheduled.day === req.params.day)
    
    if (!scheduled) {
        return res
        .status(400)
        .json({success: false, msg: `no schedule on ${req.params.day}`})
    }

    const newSchedule = schedule.filter((scheduled) => scheduled.day !== req.params.day)
    res.status(200).json({success: true, data: newSchedule})
}

module.exports = {
    getShedule,
    createSchedule,
    updateSchedule,
    deleteSchedule
} 