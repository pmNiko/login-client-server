import jwt from "jsonwebtoken";
import key from "./secrets";

interface JwtPayload {
  email: string;
}

const sign = (email: string) => {
  const token = jwt.sign(
    {
      email,
    },
    key,
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  return token;
};

const verify = (token: string) => {
  const payload = jwt.verify(token, key) as JwtPayload;
  return payload.email;
};

export default { sign, verify };
