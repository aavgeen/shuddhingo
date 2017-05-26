/**
 * Created by Aavgeen Singh on 5/20/2017.
 */

var helpContributeController = function(issues){
    var get = function (req,res) {
        issues.find(function(err,issues){
            if(err){
                res.status(500);
                res.send("Internal Server Error.");
            }
            else{
                res.status(200);
                res.send(issues);
            }}
        )
    };

    var add = function(req, res){
        var issue = new issues(req.body);
        issue.save(function(err){
            if(err){
                res.status(500);
                res.send("Internal Server Error in Adding.");
            }
            else{
                res.status(201);//Put successfull
                res.send(issue);
            }
        })
    }


    var patch = function(req, res){
        issues.findById(req.params.id, function(err,issue){
            if(err){
                res.status(404);
                res.send("Not Found");
            }
            else{
                if(req.body._id){
                    delete req.body._id; // We should not update the id of the  object even if the user wants to do it.
                }
                for(var p in req.body){
                    issue[p] = req.body[p]; //This is update only the properties that we have sent in the request.
                }

                issue.save(function(err){
                    if(err){
                        res.status(500);
                        res.send("Failed");
                    }
                    else{
                        res.status(200);
                        res.send(issue);
                    }
                })
            }
        })
    }

    var del = function(req,res){
        issues.findById(req.body._id, function(err,issue){
            if(!err){
                issue.remove(function(err){
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
        patch: patch,
        del: del				//This pattern is called revealing design pattern.
    }
}

module.exports = helpContributeController;