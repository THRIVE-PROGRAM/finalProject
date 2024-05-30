const authentication = require('../middlewares/authentication')
const router = require('../helpers/router');
const { createTransaction, getTransaction } = require('../controllers/transaction.controller');
const { buyerAuthorization, sellerAuthorization } = require('../middlewares/authorization');

router.use(authentication)
router.use(buyerAuthorization, sellerAuthorization)
router.get('/get-transaction', getTransaction)
router.post('/create-transaction', createTransaction)

module.exports = router;