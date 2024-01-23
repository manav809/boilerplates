import { Request, Response } from "express";

async function getHost(request: Request, response: Response): Promise<void> {
  try {
    response.send({ Host: "Manav" });
  } catch {
    response.send({ error: "Error" });
  }
}

const HostController = {
  getHost,
};

export default HostController;
