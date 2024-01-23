import { Request, Response } from "express";
import HostService from "../services/host";

async function getHost(request: Request, response: Response): Promise<void> {
  try {
    const hosts = await HostService.getHosts();
    response.status(200).json(hosts);
  } catch {
    response.send({ error: "Error" });
  }
}

const HostController = {
  getHost,
};

export default HostController;
