const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;
// ("mongodb+srv://<db_username>:<db_password>@zyra.l75hwjs.mongodb.net/?appName=Zyra");
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connect = (collection) => {
  const database = process.env.DB_NAME;
  return client.db(database).collection(collection);
};
