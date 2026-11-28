import mongoose from 'mongoose'

const dbConfig = async() => {
    try{
        await mongoose.connect("mongodb://asadkaptech_db_user:R3Ry8G4BnZRVyh0i@ac-kdpjnl7-shard-00-00.l7qstzf.mongodb.net:27017,ac-kdpjnl7-shard-00-01.l7qstzf.mongodb.net:27017,ac-kdpjnl7-shard-00-02.l7qstzf.mongodb.net:27017/?ssl=true&replicaSet=atlas-5w7w0t-shard-0&authSource=admin");
        console.log("DB Connected");
    }
    catch(err){
        console.log("DB Error", err);
    }
}

export default dbConfig;