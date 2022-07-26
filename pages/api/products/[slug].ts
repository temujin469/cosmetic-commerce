import { createRouter } from "next-connect";
import { NextApiResponse,NextApiRequest } from "next";
import { getProductBySlug } from "../../../lib/api/product";

const router = createRouter<NextApiRequest,NextApiResponse>();

router.get(async (req,res)=>{
  const {slug} = req.query
  const product = await getProductBySlug(slug as string)
  res.send(product)

})

export default router.handler()