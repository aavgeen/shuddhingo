/**
 * Created by Aavgeen Singh on 5/20/2017.
 */

var cashTrashController = function(trashes){
	var get = function (req,res) {
    trashes.find(function(err,trashes){
        if(err){
            res.status(500);
            res.send("Internal Server Error.");
        }
    else{
        res.status(200);
        res.send(trashes);
    }}
   )
};

var add = function(req, res){
	var trash = new trashes(req.body);
	trash.save(function(err){
		if(err){
			res.status(500);
			res.send("Internal Server Error in Adding.");
		}
		else{
			res.status(201);//Put successfull
			res.send(trash);
		}
	})
}

var getById = function(req, res){	//We can also do getBytrashname but it depends on the FB and gmail library that we use in Android.
	trashes.findById(req.params.id, function(err, trash){
		if(err){
			res.status(404);//not found.
			res.send("Not Found");
		}
		else{
			res.status(200);
			res.send(trash);
		}
	})
}


var patch = function(req, res){
	trashes.findById(req.params.id, function(err,trash){
		if(err){
			res.status(404);
			res.send("Not Found");
		}
		else{
			if(req.body._id){
				delete req.body._id; // We should not update the id of the movioe object even if the trash wants to do it.
			}
			for(var p in req.body){
				trash[p] = req.body[p]; //This is update only the properties that we have sent in the request.
			}
			
			trash.save(function(err){
				if(err){
					res.status(500);
					res.send("Failed");
				}
				else{
					res.status(200);
					res.send(trash);
				}
			})
		}
	})
}

var del = function(req,res){
	trashes.findById(req.body._id, function(err,trash){
		if(!err){
			trash.remove(function(err){
				res.status(204);
				res.send("Removed")
			})
		}
		else{
			res.status(404)
			res.send("Not found")
		}
	})
}
return {
	get: get,
	add: add,
	getById: getById,
	patch: patch,
	del: del				//This pattern is called revealing design pattern.
}
}

module.exports = cashTrashController;