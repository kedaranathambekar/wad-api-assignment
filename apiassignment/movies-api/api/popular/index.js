import express from 'express';
import popularModel from './popularModel';
import asyncHandler from 'express-async-handler';


const router = express.Router(); 


router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const totalDocumentsPromise = popularModel.estimatedDocumentCount(); //Kick off async calls
    const popularPromise = popularModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    const popular = await popularPromise;

    const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: popular };//construct return Object and insert into response object

    res.status(200).json(returnObject);

    
}));
// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const pop = await popularModel.findByMovieDBId(id);
    if (pop) {
        res.status(200).json(pop);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));



router.post('/:id/rating', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const pops = await popularModel.findByMovieDBId(id);
    console.log(req.body.rating)
    const rating = req.body.rating
   await pops.rating.push(rating)
   await pops.save(); 
   res.status(201).json(pops); 
}));



export default router;