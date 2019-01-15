// Access our newly created Mongoose Model
var Reed = require('../models/reed.js')

// Saving the context of this module inside the _the variable
_this = this

// Let's use an Async function to get the To Do List
//this is a function
    exports.getReeds = async function(query, page, limit){

        // We also want to set up options for the mongoose paginate

        var options = {
            page,
            limit
        }

    //Let's create a Try and Catch function 
    //that way we have some error handling set. 
    //Waiting for the promise
        
    try {
        var reeds = await Reed.paginate(query, options)
        
    //Once the Mongoose promise is returned 
    //we're going to go ahead and return 
    //the To Do List it has produced 

        return reeds;

    } catch (e) {

    //If the try didn't work we're going to 
    //go ahead and let the users know what kind of 
    //Error we have

        throw Error('Oh No! We got an error while Paginating our To-Do Tasks, so sorry!' )
    }
}


exports.createReed = async function(reed){
    
    // Creating a new Mongoose Object by using the new keyword
    
        var newReed = new Reed({
            job: reed.job,
            favFood: reed.favFood,
            isCool: reed.isCool
        })
    
        try{
    
            // Let's go ahead and save the Reed 
    
            var savedReed = await newReed.save()
    
            return savedReed;
        }catch(e){
          
            //if we can't create a Reed we want to throw an error 
    
            throw Error("Error while Creating Reed")
        }
    }

    exports.updateReed = async function(reed){
        var id = reed.id
    
        try{
            //Find the old Reed Object by the Id
        
            var oldReed = await Reed.findById(id);
        }catch(e){
            throw Error("Error occured while Finding the Reed")
        }
    
        // If no old Reed Object exists return false
    
        if(!oldReed){
            return false;
        }
    
        console.log(oldReed)
    
        //Edit the Reed Object
    
        oldReed.job = reed.job
        oldReed.favFood = reed.favFood
        oldReed.isCool = reed.isCool
    
    
        console.log(oldReed)
    
        try{
            var savedReed = await oldReed.save()
            return savedReed;
        }catch(e){
            throw Error("And Error occured while updating the Reed");
        }
    }

    exports.deleteReed = async function(id){
    
        // Delete the Reed
    
        try{
            var deleted = await Reed.deleteOne({_id: id})
            if(deleted.n === 0){
                throw Error("Reed Could not be deleted")
            }
            return deleted
        }catch(e){
            throw Error("Error Occured while Deleting the Reed")
        }
    }