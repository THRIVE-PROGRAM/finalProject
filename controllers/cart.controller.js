// Models
const Cart = require("../models").Cart;
// Helpers
const statusMessage = require("../helpers/status.message");

module.exports = {
    getCart: async (req, res) => {
        try {
            const id = req.decoded.id

            const cart = await Cart.findAll({
                where: {
                    user_id: id
                },
                include: ['Product']
            })
            
            statusMessage(res, 201, true, "Get Cart successful", cart);
        } catch (error) {
            statusMessage(res, 404, false, error.message);
        }
    },

    addToCart: async (req, res) => {
        try {
            const body = {
                user_id: req.decoded.id,
                product_id: req.body.product_id,
                quantity: 1
            }

            const cart = await Cart.create(body)

            statusMessage(res, 201, true, "Add to cart successful", cart);
        } catch (error) {
            statusMessage(res, 404, false, error.message);
        }
    },

    deleteFromCart: async (req, res) => {
        try {
            const id = req.params.id

            const cart = await Cart.destroy({
                where: {
                    id: id
                }
            })

            if(!cart){
                statusMessage(res, 404, false, "Cart not found");
                return;
            }

            statusMessage(res, 201, true, "Delete Cart successful", cart);

        } catch (error) {
            statusMessage(res, 404, false, error.message);
        }
    }
}