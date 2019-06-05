//Dependecies
import * as express from "express";

//Controllers
import userCntroller from './../controllers/user';

class Router{
    public router = express.Router();
    constructor(){
        /**
         * Define routes, metoth and controllers for user
         * feel free to use more than one router file for each module, this is a single gide
         */
        //Crud user, create, find, update and delete..
        this.router.post("/user/create", userCntroller.create);
        this.router.post("/user/update", userCntroller.update);
        this.router.get("/user/:id", userCntroller.findByEmail);
        this.router.delete("/user/:id", userCntroller.delete);
    }
}

export default new Router().router;