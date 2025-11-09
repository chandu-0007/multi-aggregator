import Express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './user/user.js';
dotenv.config();
const app = Express();
app.use(Express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use('/user', userRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
function OtpGenerate() {
    const random = Math.floor(1000 + Math.random() * 9000);
    console.log(Math.random());
    console.log(Math.random() * 9000);
    console.log("generated otp is ", random);
}
OtpGenerate();
//# sourceMappingURL=index.js.map