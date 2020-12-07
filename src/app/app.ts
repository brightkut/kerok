import * as express from 'express'
import {InitialApp} from "./interface";
import {MongoConnection} from "../mongo-db-adapter";
import {MongoConnectionOption} from "../mongo-connection";
import * as util from "util";

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
    public listen(dbName:string,connectionOption: MongoConnectionOption):void{
         this.app.listen(this.port,async ()=>{
             await MongoConnection.getConnection().connect(dbName,connectionOption)
             console.log("check db exist"+util.inspect(MongoConnection.getConnection().getDB(),{depth:null,showHidden:true}))
         })
    }
}