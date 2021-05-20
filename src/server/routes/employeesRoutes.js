import express from 'express';
import {getAll, getOne} from '../db/queries/get'

const router = express.Router();

router.get("/:id?",async (req, res, next) =>{
    try{
      const {id} = req.params;
      let data;
      if(id){
         [data] = await getOne("employees",id);
        
        
      }else {
        data = await getAll("employees");
        
      }
      res.status(200).json(data || {msg: "No data available"});
    }catch(error) {
        next(error);
    }
  })

  export default router;