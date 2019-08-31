import { Router } from "express";
const routes = new Router();

routes.get("/home", (req, res) => {
  return res.json({ message: "Código inicial" });
});

export default routes;
