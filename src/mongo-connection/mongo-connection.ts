import {Db, MongoClient} from 'mongodb'
import {MongoConnectionOption} from "./interface";
export class MongoConnection {
    private static connection: MongoConnection
    protected db: Db

    private constructor() {}

    public static getConnection():MongoConnection{
        if(!this.connection){
            this.connection = new MongoConnection()
        }

        return this.connection
    }

    public async connect(dbName:string,connectionOption: MongoConnectionOption):Promise<void>{
        const db = await MongoClient.connect(connectionOption.url,connectionOption.options)

        this.db = db.db(dbName)
    }

    public getDB():Db{
        return this.db
    }
}