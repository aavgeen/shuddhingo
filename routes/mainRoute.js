/**
 * Created by Aavgeen Singh on 5/20/2017.
 */

var express = require('express');

var mainRouter = express.Router();



var issues = require('./../models/helpContributeModel')

var usersEnroll = require('./../models/enrollUserModel')

var users = require('./../models/usersModel')

var cashTrash = require('./../models/cashTrashModel')



var helpContributeController = require('./../controllers/helpContributeController')(issues);

var enrollController = require('./../controllers/enrollController')(usersEnroll); 

var usersController = require('./../controllers/usersController')(users)

var cashTrashController = require('./../controllers/cashTrashController')(cashTrash)


mainRouter.route('/issues')
    .get(helpContributeController.get)
    .post(helpContributeController.add)
    .delete(helpContributeController.del);
mainRouter.route('/issues/:id')
    //.get(helpContributeController.getById)
    // .put(helpContributeController.update) //PUT request updates everything, means if we put only one property then other properties will be deleted.
    .patch(helpContributeController.patch);
	
	
	
mainRouter.route('/enrollments')
    .get(enrollController.get)
    .post(enrollController.add)
    .delete(enrollController.del);
mainRouter.route('/enrollments/:id')
    .get(enrollController.getById)
    // .put(helpContributeController.update) //PUT request updates everything, means if we put only one property then other properties will be deleted.
    .patch(enrollController.patch);
	
	
	
mainRouter.route('/users')
    .get(usersController.get)
    .post(usersController.add)
    .delete(usersController.del);
mainRouter.route('/users/:id')
    .get(usersController.getById)
    // .put(helpContributeController.update) //PUT request updates everything, means if we put only one property then other properties will be deleted.
    .patch(usersController.patch);
	
	
	
mainRouter.route('/cashTrash')
    .get(usersController.get)
    .post(usersController.add)
    .delete(usersController.del);
mainRouter.route('/cashTrash/:id')
    .get(usersController.getById)
    // .put(helpContributeController.update) //PUT request updates everything, means if we put only one property then other properties will be deleted.
    .patch(usersController.patch);

module.exports = mainRouter;


