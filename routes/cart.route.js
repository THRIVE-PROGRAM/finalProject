const { addToCart, getCart, deleteFromCart } = require('../controllers/cart.controller');
const router = require('../helpers/router');
const authentication = require('../middlewares/authentication');
const { buyerAuthorization, sellerAuthorization } = require('../middlewares/authorization');

router.use(authentication)
router.use(buyerAuthorization, sellerAuthorization)
router.get('/get-cart', getCart)
router.post('/add-cart', addToCart)
router.delete('/delete-cart/:id', deleteFromCart)

module.exports = router