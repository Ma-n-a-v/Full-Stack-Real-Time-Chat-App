import express from "express"
import { signup, login, logout } from "../controllers/auth.controller.js";
const router = express.Router();
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfile } from "../controllers/auth.controller.js";
import { checkAuth } from "../controllers/auth.controller.js";

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile); //protectRoute to authenticate the uuser before changing the profile pic by validating jwt token

router.get("/check", protectRoute, checkAuth);
export default router;