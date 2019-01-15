// We need to be able to access the Service 
//that we just created so let's pull that in

var ReedService = require('../services/reed.js');

// Make sure to save the context of 
//this module inside the _this variable

_this = this



exports.getReeds = async function(req, res, next){

    // We're going to use ternary to check 
    //the existence of the query parameters
        
        var page = req.query.page ? req.query.page : 1
        var limit = req.query.limit ? req.query.limit : 10; 
    
        try{
        
            var reeds = await ReedService.getReeds({}, page, limit)
            
    // Return the todos list with the appropriate 
    //HTTP Status Code and Message.
            
            return res.status(200).json({status: 200, data: reeds, message: "Succesful, Reeds Recieved"});
            
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
            return res.status(400).json({status: 400, message: e.message});
            
        }
    }


    exports.createReed = async function(req, res, next){

        // Note: Req.Body contains the form submit values.
    
        var reed = {
            job: req.body.job,
            favFood: req.body.favFood,
            isCool: req.body.isCool
        }
    
        try{
            
    // Calling the Service function 
    //with the new object from the Request Body
        
            var createdReed = await ReedService.createReed(reed)
            return res.status(201).json({status: 201, data: createdReed, message: "Succesfully Created Reed"})
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
    return res.status(400).json({status: 400, message: "Reed Creation was Unsuccesfull, I am sorry :( "})
        }
    }
    
    exports.updateReed = async function(req, res, next){

        // Id is necessary for the update
    
        if(!req.body._id){
            return res.status(400).json({status: 400, message: "Id must be present"})
        }
    
        var id = req.body._id;
    
        console.log(req.body)
    
        var reed = {
            id,
            job: req.body.job ? req.body.job : null,
            favFood: req.body.favFood ? req.body.favFood : null,
            isCool: req.body.isCool ? req.body.isCool : null
        }
    
        try{
            var updatedReed = await ReedService.updateReed(reed)
            return res.status(200).json({status: 200, data: updatedReed, message: "Succesfully Updated Reed"})
        }catch(e){
            return res.status(400).json({status: 400, message: e.message})
        }
    }
    

    exports.removeReed = async function(req, res, next){

        var id = req.params.id;
    
        try{
            var deleted = await ReedService.deleteReed(id)
            return res.status(204).json({status:204, message: "Succesful, Reed Deleted"})
        }catch(e){
            return res.status(400).json({status: 400, message: e.message})
        }
    
    }