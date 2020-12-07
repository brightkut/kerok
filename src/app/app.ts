import * as express from 'express'
import {InitialApp} from "./interface";
import {MongoConnectionOption} from "../mongo-connection";

export class App {
    protected app: express.Application
    protected port:number

    constructor(init:InitialApp) {
        this.app = express()
        this.port = init.port ?? 8000
        this.setMiddleWares(init.middleWares)
        this.setRoutes(init.routes)
    }

    private setMiddleWares(middleWares: any[]){
        for (const middleWare of middleWares){
            this.app.use(middleWare)
        }
    }

    private setRoutes(routes: any[]){
        for (const route of routes){
            this.app.use('/',route.getRouter())
        }
    }
    public listen():void{
        this.app.listen(this.port);
    }
}