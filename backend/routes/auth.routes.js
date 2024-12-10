import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// router.post("/Signup", (req, res) => {
//     console.log("Signup request received");
//     login(req, res);
// });
router.post("/signup", signup);

router.post("/login", (req, res) => {
    console.log("Login request received");
    login(req, res);
});
router.post("/login", login);

router.post("/logout", (req, res) => {
    console.log("Logout request received");
    login(req, res);
});
router.post("/logout", logout);

export default router;
