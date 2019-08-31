import { Router } from "express";

import User from "./app/models/User";

const routes = new Router();

routes.get("/user", async (req, res) => {
  const user = await User.create({
    name: "Khauê Machado",
    email: "khaue@gmail.com.br",
    password_hash: "123456"
  });
  return res.json(user);
});

export default routes;
