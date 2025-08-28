import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conexao com banco mongo db realizada com sucesso!!!");
  } catch (error) {
    console.log("Conexao com banco de dados mongo db nao foi realizada", error);
  }
};
