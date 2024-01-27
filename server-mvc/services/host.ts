import { HostModel } from "../models/host";
async function getHosts(): Promise<any> {
  
  const hosts = await HostModel.find({}).exec();
  return hosts;
}

export default {
  getHosts,
};
