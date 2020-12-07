import {MongoConnection} from "../mongo-connection";
import {
    CollectionBulkWriteOptions,
    CollectionCreateOptions,
    CollectionInsertManyOptions,
    CollectionInsertOneOptions, CommonOptions, Db,
    FindOneOptions, IndexOptions, IndexSpecification,
    MongoError, UpdateManyOptions, UpdateOneOptions
} from "mongodb";
import {singleton} from "tsyringe";

@singleton()
export class MongoAdapterClient {
    protected db:Db

    constructor() {
        this.db = MongoConnection.getConnection().getDB()
    }

    /**
     * ### Description
     *   - create collection
     */
    public async createCollection(collectionName: string,option?: CollectionCreateOptions):Promise<void>{
        try {
            await this.db.createCollection(collectionName,option)
        }catch (e) {
            throw new MongoError('error from create collection')
        }
    }

    /**
     * ### Description
     *   - delete collection
     */
    public async deleteCollection(collectionName: string):Promise<void>{
        try {
             await this.db.dropCollection(collectionName)
        }catch (e) {
            throw new MongoError('error from delete collection')
        }
    }

    /**
     * ### Description
     *   - create index
     */
    public async createIndex(collectionName: string,indexField: string | any,option?:IndexOptions):Promise<void>{
        try {
             await this.db.collection(collectionName).createIndex(indexField,option)
        }catch (e) {
            throw new MongoError('error from create index')
        }
    }

    /**
     * ### Description
     *   - multi create index
     */
    public async multiCreateIndex(collectionName: string,indexFields: IndexSpecification[]):Promise<void>{
        try {
             await this.db.collection(collectionName).createIndexes(indexFields)
        }catch (e) {
            throw new MongoError('error from multi create index')
        }
    }

    /**
     * ### Description
     *   - find document
     */
    public async find(collectionName:string,query:FilterQuery,option?:FindOneOptions):Promise<any>{
        try {
             return  await this.db.collection(collectionName).find(query,option).toArray()

        }catch (e) {
            throw new MongoError('error from find document')
        }
    }

    /**
     * ### Description
     *   - insert document
     */
    public async insert(collectionName:string,doc:any,option?: CollectionInsertOneOptions):Promise<void>{
        try {
             await this.db.collection(collectionName).insertOne(doc,option)
        }catch (e) {
            throw new MongoError('error from insert document')
        }
    }

    /**
     * ### Description
     *   - multiple insert document
     */
    public async multipleInsert(collectionName:string,doc:any[],option?: CollectionInsertManyOptions):Promise<void>{
        try {
             await this.db.collection(collectionName).insertMany(doc,option)
        }catch (e) {
            throw new MongoError('error from multiple insert document')
        }
    }

    /**
     * ### Description
     *   - update document
     */
    public async update(collectionName:string,query:FilterQuery,update?:UpdateQuery,option?: UpdateOneOptions):Promise<void>{
        try {
             await this.db.collection(collectionName).updateOne(query,update,option)
        }catch (e) {
            throw new MongoError('error from update document')
        }
    }

    /**
     * ### Description
     *   - multi update document
     */
    public async multiUpdate(collectionName:string,query:FilterQuery,update?:UpdateQuery,option?: UpdateManyOptions):Promise<void>{
        try {
             await this.db.collection(collectionName).updateMany(query,update,option)
        }catch (e) {
            throw new MongoError('error from multi update document')
        }
    }

    /**
     * ### Description
     *   - delete document
     */
    public async delete(collectionName:string,query:FilterQuery,option?: CommonOptions):Promise<void>{
        try {
             await this.db.collection(collectionName).deleteOne(query,option)
        }catch (e) {
            throw new MongoError('error from delete document')
        }
    }

    /**
     * ### Description
     *   - multi delete document
     */
    public async multiDelete(collectionName:string,query:FilterQuery,option?: CommonOptions):Promise<void>{
        try {
             await this.db.collection(collectionName).deleteMany(query,option)
        }catch (e) {
            throw new MongoError('error from multi delete document')
        }
    }

    /**
     * ### Description
     *   - transaction write
     */
    public async transactionWrite(collectionName:string,operations :any[],option?: CollectionBulkWriteOptions):Promise<void>{
        try {
             await this.db.collection(collectionName).bulkWrite(operations,option)
        }catch (e) {
            throw new MongoError('error from transaction write')
        }
    }

    /**
     * ### Description
     *   - get collection
     */
    public async getCollection(collectionName:string):Promise<boolean>{
        const collection = await this.db.listCollections({name:collectionName}).toArray()

        return collection.length != 0;
    }
}

export interface FilterQuery {
    [query : string]: any
}

export interface UpdateQuery {
    [query : string]: any
}



