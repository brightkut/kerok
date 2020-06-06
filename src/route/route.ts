import * as express from "express";
import {Router} from "express";

export abstract class Route{
    protected router:Router

    constructor() {
        this.router = express.Router()
        this.createController()
    }

    public getRouter():Router{
        return this.router
    }

     protected abstract createController():void
}

