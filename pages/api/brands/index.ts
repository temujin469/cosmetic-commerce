import { createRouter } from "next-connect";
import { NextApiResponse,NextApiRequest } from "next";
import { getBrands} from "../../../lib/api/brand";

const router = createRouter<NextApiRequest,NextApiResponse>();

router.get(async (req,res)=>{
  const brands = await getBrands()
  res.json(brands)
})

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end("Something broke!");
  }
});