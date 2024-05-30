const {
  getCategories,
  createCategory,
  getDetailCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");
const router = require("../helpers/router");
const authentication = require("../middlewares/authentication");
const { adminAuthorization, buyerAuthorization } = require("../middlewares/authorization");

router.get("/getAll", buyerAuthorization, getCategories);
router.get("/detail/:id", buyerAuthorization, getDetailCategory);
router.use(authentication);
router.use(adminAuthorization);
router.post("/create", createCategory);
router.put("/update-category/:id", updateCategory);
router.delete("/delete-category/:id", deleteCategory);

module.exports = router;
