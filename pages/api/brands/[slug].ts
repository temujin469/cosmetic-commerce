import { createRouter } from "next-connect";
import { NextApiResponse,NextApiRequest } from "next";
import { getBrandBySlug } from "../../../lib/api/brand";

const router = createRouter<NextApiRequest,NextApiResponse>();

router.get(async (req,res)=>{
  const {slug} = req.query
  const brand = await getBrandBySlug(slug as string)
  res.json(brand)

})

export default router.handler()