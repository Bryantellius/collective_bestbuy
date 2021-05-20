import express from 'express';
import {getAll, getOne} from '../db/queries/get'

const router = express.Router();

router.get("/:id?",async (req, res, next) =>{
    try{
      const {id} = req.params;
      let data;
      if(id){
         [data] = await getOne("products",id);
        
        
      }else {
        
        data = await getAll("products");
        
      }
      res.status(200).json(data || {msg: "No data available"});
    }catch(error) {
        next(error);
    }
  })

  export default router;