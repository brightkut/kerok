import {NextFunction, Request, Response} from "express";
import  * as util from 'util'

export class Middleware {

    public loggerMiddleware(req:Request,res:Response,next:NextFunction){
        const log = `Logging Request = Method: ${req.method} Path: ${req.path} Body: ${req.body} Params: ${req.params} Query: ${req.query}`
        console.log(util.inspect(log, {showHidden: false, depth: null}))
        next()
    }
}