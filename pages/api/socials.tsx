import {socials} from "./data/socials";
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API_HOST: ', process.env.API_HOST);
  if (req.method === 'GET') {
    res.status(200).json(socials);
  }

}
