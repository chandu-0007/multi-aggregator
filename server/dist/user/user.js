import { application, Router } from "express";
const router = Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
router.get('/', (req, res) => {
    res.send("user roure is working");
    console.log("user route is called ");
});
// loign router 
router.post('/register', async (req, res) => {
    const userInfo = req.body;
    if (!userInfo) {
        return res.status(400).json({
            status: false,
            message: 'user info is required'
        });
    }
    const { FirstName, LastName, username, phone, password } = userInfo;
    try {
        const saltRounds = 10;
        const Existuser = await prisma.user.findUnique({
            where: {
                username: username
            }
        });
        if (Existuser) {
            return res.status(200).json({
                status: false,
                message: "user already exits"
            });
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await prisma.user.create({
            data: {
                FristName: FirstName,
                LastName: LastName,
                username: username,
                phone: phone,
                HashPassword: hashedPassword
            }
        });
        if (newUser) {
            return res.status(201).json({
                status: true,
                message: "user registered successfully",
                userId: newUser.id
            });
        }
        else {
            return res.status(500).json({
                status: false,
                message: "internal server error"
            });
        }
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "interna server is errror "
        });
    }
});
// Login router 
router.post("/login", async (req, res) => {
    const { phone, username, password } = req.body;
    if ((!username || !phone) && !password) {
        return res.status(400).json({
            status: false,
            message: "username or phone Number and password are required"
        });
    }
    try {
        const Existuser = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { phone: phone }
                ]
            }
        });
        if (!Existuser) {
            return res.status(404).json({
                status: false,
                message: "user not found , please register first"
            });
        }
        const passwordMatch = await bcrypt.compare(password, Existuser.HashPassword);
        if (!passwordMatch) {
            return res.status(401).json({
                status: false,
                message: "invaild password"
            });
        }
        return res.status(200).json({
            status: true,
            message: "login successful",
            userId: Existuser.id
        });
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "internal server error"
        });
    }
});
// Otp generation 
function OtpGenerate() {
    const random = Math.floor(1000 + Math.random() * 9000);
    console.log("generated otp is ", random);
}
export default router;
//# sourceMappingURL=user.js.map