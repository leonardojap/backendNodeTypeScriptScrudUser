//Dependencies
import * as LocalStorage from 'node-localstorage';

import ResponseDto from './../DTO/response';
import User from './../DTO/user'


class UserController{
    
    constructor(){}

    create(req, res){
        let data:User = req.body; //get data from client in body
        //simulate database instance
        let localStorage = new LocalStorage.LocalStorage('./scratch');    
        let previous = localStorage.getItem(data.email);
        if(previous != undefined){ // check if the user does exist
            res.send(new ResponseDto(200,"That email address is registered yet",{}));
        }else{
            localStorage.setItem(data.email, JSON.stringify(data)); // register in 'data base'
            res.send(new ResponseDto(200,"The user was created successfullt",data));
        }
    }

    update(req, res){
        let data = req.body;
        //simulate database instance
        let localStorage = new LocalStorage.LocalStorage('./scratch');
        let previous = localStorage.getItem(data.email);
        if(previous == undefined){
            res.send(new ResponseDto(200,"There is not an user registered with that email address",{}));
        }else{
            let user: User = JSON.parse(previous);
            user = Object.assign(user, data);
            localStorage.setItem(user.email, JSON.stringify(user));
            res.send(new ResponseDto(200, "The user was updated successfully", user));
        }
    }

    findByEmail(req, res){
        //simulate database instance
        let localStorage = new LocalStorage.LocalStorage('./scratch');
        let user = localStorage.getItem(req.params.id);
        if(user == undefined){
            res.send(new ResponseDto(200,"There is not an user registered with that email address",{}));
        }else{
            let data: User = JSON.parse(user);
            res.send(new ResponseDto(200, "The user was finded successfully", data));
        }
    }

    delete(req, res){
        //simulate database instance
        let localStorage = new LocalStorage.LocalStorage('./scratch');
        let user = localStorage.getItem(req.params.id);
        if(user == undefined){
            res.send(new ResponseDto(200,"There is not an user registered with that email address",{}));
        }else{
            localStorage.removeItem(req.params.id);
            res.send(new ResponseDto(200, "The user was deleted successfully", {}));
        }
    }

}

export default new UserController();