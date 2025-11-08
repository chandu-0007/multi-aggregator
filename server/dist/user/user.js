import { application, Router } from "express";
const router = Router();
router.get('/', (req, res) => {
    res.send("user roure is working");
    console.log("user route is called ");
});
export default router;
//# sourceMappingURL=user.js.map