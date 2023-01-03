import express from 'express';
import topRatedModel from './topRatedModel';
import asyncHandler from 'express-async-handler';



const router = express.Router(); 


router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const totalDocumentsPromise = topRatedModel.estimatedDocumentCount(); //Kick off async calls
    const topRatedPromise = topRatedModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    const topRated = await topRatedPromise;

    const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: topRated };//construct return Object and insert into response object

    res.status(200).json(returnObject);

    
}));
// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const top = await topRatedModel.findByMovieDBId(id);
    if (top) {
        res.status(200).json(top);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));



router.post('/:id/rating', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tops = await topRatedModel.findByMovieDBId(id);
    console.log(req.body.rating)
    const rating = req.body.rating
   await tops.rating.push(rating)
   await tops.save(); 
   res.status(201).json(tops); 
}));



export default router;