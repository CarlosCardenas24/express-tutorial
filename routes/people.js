const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPeople,
    createPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

/* router.get('/', getPeople)
router.post('/', createPeople)
router.post('/postman', createPostman)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson) */

router.route('/').get(getPeople).post(createPeople)
router.route('/postman').post(createPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router