import jwt from "../JWT";
import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = jwt.sign(email);

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

const profile = (req: Request, res: Response) => {
  try {
    const email = req.email;

    res.json({ email });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default {
  login,
  profile,
};
