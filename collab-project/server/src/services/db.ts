import mongoose, { mongo } from 'mongoose';

async function dbconnect() {
    // const uri = "mongodb://localhost:7070/csgames";
    // const client = new MongoClient(uri);
    // try{
    //     await client.connect();
    //     await listDatabases(client);

    // }catch(e){
    //     console.log(e)
    // }
    // return client;
    try{
        await mongoose.connect("mongodb://localhost:7070/csgames", {
            // useUnifiedTopology: true,
        })
    }catch(err){
        console.log(err)
    }

    const legoSchema = new mongoose.Schema({ 
        name: String, 
        color: String,
        size: String,
        price: Number,
        quantity: Number, 
    }); 
      
    // Defining userSchema model 
}

// async function listDatabases(client: MongoClient){
//     const databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

export default dbconnect ;