import { createRouter } from "next-connect";
import { NextApiResponse,NextApiRequest } from "next";
import { getProducts } from "../../../lib/api/product";

const router = createRouter<NextApiRequest,NextApiResponse>();

router.get(async (req,res)=>{
  const products = await getProducts()
  res.json(products)
})

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end("Something broke!");
  }
});