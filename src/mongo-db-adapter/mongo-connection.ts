import {Db, MongoClient} from 'mongodb'
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

    public async connect():Promise<void>{
        const db = await MongoClient.connect('mongodb://localhost:27017',{
                auth:{
                    user:'root',
                    password:'example'
                }
        })

        this.db = db.db('kerok')
    }

    public getDB():Db{
        return this.db
    }
}