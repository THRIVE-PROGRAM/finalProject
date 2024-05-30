const {
  register,
  signIn,
  updateUser,
  getUser,
} = require("../controllers/user.controller");
const router = require("../helpers/router");
const authentication = require("../middlewares/authentication");

router.post("/register", register);
router.post("/signIn", signIn);
router.use(authentication);
router.get("/get/:id", getUser);
router.put("/update/:id", updateUser);

module.exports = router;
