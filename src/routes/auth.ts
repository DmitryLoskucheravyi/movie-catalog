import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Router, Request, Response } from "express";

import { validate } from "../middleware/validate";
import { UserModel } from "../models/user.model";
import { loginSchema, registerSchema } from "../schemas/auth.schema";

import {
    AuthRequest,
    requireAuth
} from "../middleware/requireAuth";

const router = Router();

router.post(
    "/register",
    validate(registerSchema),
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const existingUser = await UserModel.findOne({
            email
        });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",

            user: {
                id: user.id,
                email: user.email,
                createdAt: user.createdAt
            }
        });
    }
);

router.post(
    "/login",
    validate(loginSchema),
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const user = await UserModel.findOne({
            email
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const accessToken = jwt.sign(
            {
                userId: user.id,
                email: user.email
            },
            process.env.JWT_ACCESS_SECRET as string,
            {
                expiresIn: "15m"
            }
        );

        const refreshToken = jwt.sign(
            {
                userId: user.id
            },
            process.env.JWT_REFRESH_SECRET as string,
            {
                expiresIn: "7d"
            }
        );

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.json({
            message: "Login successful",

            accessToken,

            user: {
                id: user.id,
                email: user.email
            }
        });
    }
);

router.get(
    "/me",
    requireAuth,
    async (req: AuthRequest, res: Response) => {
        res.json({
            message: "Authorized",

            user: req.user
        });
    }
);

router.post(
  "/logout",
  (_req: Request, res: Response) => {
    res.clearCookie("refreshToken");

    res.json({
      message: "Logout successful"
    });
  }
);

export default router;