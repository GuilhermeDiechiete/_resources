const { MongoClient} = require('mongodb') // import mongoclient 

// endereço do mongodb
const uri = 'mongodb://127.0.0.1:27017/dbproducts'

const client = new MongoClient(uri)

async function run(){
    try{
        await client.connect()
        console.log('--------Connect MongoDB--------')
    }
    catch(err){
        console.log(err)
    }
}

run()

module.exports = client