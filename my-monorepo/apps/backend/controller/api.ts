import { Request, Response } from "express";
import { getUserById, updateUser } from "../repository/userCollection";

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;
    const user = await getUserById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;
    await updateUser(userId, req.body);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
