import { createRouter } from "next-connect";
import { NextApiResponse,NextApiRequest } from "next";
import { getCategories } from "../../../lib/api/category";

const router = createRouter<NextApiRequest,NextApiResponse>();

router.get(async (req,res)=>{
  const categories = await getCategories()
  
  res.send(categories)
})

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end("Something broke!");
  }
});