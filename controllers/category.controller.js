// Models
const Category = require("../models").Category;
// Helpers
const statusMessage = require("../helpers/status.message");

module.exports = {
    getCategories: async (req, res) => {
        try {
            const categories = await Category.findAll();

            statusMessage(res, 201, true, "Get Category successful", categories);
        } catch (error) {
            statusMessage(res, 404, false, error.message);
        }
    },
    
    createCategory: async (req, res) => {
        try {
            const payload = req.body

            const category = await Category.create(payload)

            statusMessage(res, 201, true, "Create Category successful", category);
        } catch (error) {
            statusMessage(res, 404, false, error.message);
        }
    },

    getDetailCategory: async (req, res) => {
        try {
            const id = req.params.id

            const category = await Category.findByPk(id)

            if(!category){
                statusMessage(res, 404, false, "Category not found");
                return;
            }

            statusMessage(res, 201, true, "Get Category successful", category);
        } catch (error) {
            statusMessage(res, 404, false, error.message);
        }
    },
    
    updateCategory: async (req, res) => {
        try {
            const id = req.params.id
            const payload = req.body

            const category = await Category.update(payload, {
                where: {
                    id
                }
            })

            if(!category) {
                statusMessage(res, 404, false, "Category not found");
                return;
            }

            statusMessage(res, 201, true, "Update Category successful", category);
        } catch (error) {
            statusMessage(res, 404, false, error.message);
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const id = req.params.id

            const category = await Category.destroy({
                where: {
                    id
                }
            })

            if(!category){
                statusMessage(res, 404, false, "Category not found");
                return;
            }

            statusMessage(res, 201, true, "Delete Category successful", category);
        } catch (error) {
            statusMessage(res, 404, false, error.message);
        }
    },
}