import {MongoClientOptions} from "mongodb";

export interface MongoConnectionOption {
    url:string,
    options?: MongoClientOptions
}