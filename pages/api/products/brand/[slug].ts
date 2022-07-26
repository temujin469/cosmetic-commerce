import { createRouter } from "next-connect";
import { NextApiResponse,NextApiRequest } from "next";
import { getProductsByBrand} from "../../../../lib/api/product";

const router = createRouter<NextApiRequest,NextApiResponse>();

router.get(async (req,res)=>{
  const {slug} = req.query
  const products = await getProductsByBrand(slug as string)
  res.send(products)

})

export default router.handler()