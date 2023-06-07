import { Handler } from "express";
import { Request, Response, NextFunction } from "express";
import jwt from "../JWT";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ").at(1);

  if (!authHeader || !token) {
    return res.status(401).json({ message: "No autorizado!" });
  }

  const email = jwt.verify(token);

  if (!email) return res.status(401).json({ message: email });

  req.email = email;

  next();
};

export default { requireAuth };
