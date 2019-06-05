import * as express from "express";
import * as bodyparser from 'body-parser';
 
class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended: false}));
    }
}
 
export default new App().app;