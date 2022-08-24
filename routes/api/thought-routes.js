const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../Social-NET-API/controllers/thought-controller');

router.route('/')
    .get(getAllThoughts);
    

router.route('/:userId')
    .post(addThought);
    
router.route('/:id')
    .put(updateThought)
    
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(addReaction)
    .delete(deleteThought);

router.route('/:userId/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;