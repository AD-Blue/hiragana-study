import { MongoClient } from "mongodb";

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;
let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

const getMongoClient = async (): Promise<MongoClient> => {
  if (!mongoConnectionString) {
    throw new Error("Add mongo connection string to .env.local");
  }

  if (process.env.NODE_ENV !== "production") {
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(mongoConnectionString);
      globalWithMongo._mongoClientPromise = client.connect();
    }

    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    if (!client) {
      client = new MongoClient(mongoConnectionString);
      clientPromise = client.connect();
    }

    return clientPromise;
  }

  return clientPromise;
};

export { getMongoClient };
