import { HostModel } from "../models/host";
async function getHosts(): Promise<any> {
  const hosts: string[] = await HostModel.find({});
  return hosts;
}

export default {
  getHosts,
};
