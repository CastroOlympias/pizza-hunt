const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router
  .route('/:pizzaId/:commentId')
  .post(addComment)
  .put(addReply)
  .delete(removeComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;
