import { Request, Response } from "express";

module.exports = {
    get : (req : Request, res: Response) => {
        res.send({"User" : "Manav Patel"})
    },
    getName : (req: Request, res: Response) => {
        res.send({"Name": "Manav"})
    }
}