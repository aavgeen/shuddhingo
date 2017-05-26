/**
 * Created by Aavgeen Singh on 5/20/2017.
 */

var enrollController = function(usersEnroll){
	var get = function (req,res) {
    usersEnroll.find(function(err,usersEnroll){
        if(err){
            res.status(500);
            res.send("Internal Server Error.");
        }
    else{
        res.status(200);
        res.send(usersEnroll);
    }}
   )
};

var add = function(req, res){
	var user = new usersEnroll(req.body);
	user.save(function(err){
		if(err){
			res.status(500);
			res.send("Internal Server Error in Adding.");
		}
		else{
			res.status(201);//Put successfull
			res.send(user);
		}
	})
}

var getById = function(req, res){	//We can also do getByUsername but it depends on the FB and gmail library that we use in Android.
	usersEnroll.findById(req.params.id, function(err, user){
		if(err){
			res.status(404);//not found.
			res.send("Not Found");
		}
		else{
			res.status(200);
			res.send(user);
		}
	})
}


var patch = function(req, res){
	usersEnroll.findById(req.params.id, function(err,user){
		if(err){
			res.status(404);
			res.send("Not Found");
		}
		else{
			if(req.body._id){
				delete req.body._id; // We should not update the id of the movioe object even if the user wants to do it.
			}
			for(var p in req.body){
				user[p] = req.body[p]; //This is update only the properties that we have sent in the request.
			}
			
			user.save(function(err){
				if(err){
					res.status(500);
					res.send("Failed");
				}
				else{
					res.status(200);
					res.send(user);
				}
			})
		}
	})
}

var del = function(req,res){
	usersEnroll.findById(req.body._id, function(err,user){
		if(!err){
			user.remove(function(err){
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

module.exports = enrollController;