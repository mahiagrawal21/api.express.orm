"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_signup_1 = require("../controller/controller.signup");
const controller_login_1 = require("../controller/controller.login");
const controller_createpost_1 = require("../controller/controller.createpost");
const controller_comment_1 = require("../controller/controller.comment");
const controller_deletecomment_1 = require("../controller/controller.deletecomment");
const controller_likes_per_comment_1 = require("../controller/controller.likes_per_comment");
const controller_recentThreeComments_1 = require("../controller/controller.recentThreeComments");
const router = express_1.default.Router();
router.get("/");
router.post("/signup", controller_signup_1.user_SignUp);
router.post("/login", controller_login_1.loginUser);
router.post("/post", controller_createpost_1.Post_photo);
router.post("/comment", controller_comment_1.createComment);
router.post("/delete", controller_deletecomment_1.delete_comment);
router.post("/comment/:like", controller_comment_1.createComment);
router.get("/list", controller_likes_per_comment_1.likes_on_comments);
router.get("/recentComment", controller_recentThreeComments_1.recent_comments);
exports.default = router;
//# sourceMappingURL=routers.js.map