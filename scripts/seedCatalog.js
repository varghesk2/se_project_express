
require("dotenv").config();

const mongoose = require("mongoose");
const ClothingItem = require("../models/clothingItem");

const SYSTEM_OWNER_ID = new mongoose.Types.ObjectId(
  "000000000000000000000001"
);

const catalogItems = [
  {
    name: "Coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png",
  },
  {
    name: "Dress",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Dress.png",
  },
  {
    name: "Hoodie",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png",
  },
  {
    name: "Jacket",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png",
  },
  {
    name: "Jeans",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jeans.png",
  },
  {
    name: "Loafers",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Loafers.png",
  },
  {
    name: "Sandals",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sandals.png",
  },
  {
    name: "Scarf",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Scarf.png",
  },
  {
    name: "Shorts",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Shorts.png",
  },
  {
    name: "Skirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Skirt.png",
  },
  {
    name: "Sneakers",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png",
  },
  {
    name: "Sunglasses",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sunglasses.png",
  },
  {
    name: "Sweatshirt",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sweatshirt.png",
  },
  {
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png",
  },
];

async function seedCatalog() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/wtwr_db"
    );

    console.log("Connected to MongoDB.");

    const operations = catalogItems.map((item) => ({
      updateOne: {
        filter: {
          name: item.name,
          imageUrl: item.imageUrl,
          owner: SYSTEM_OWNER_ID,
        },
        update: {
          $setOnInsert: {
            ...item,
            owner: SYSTEM_OWNER_ID,
            likes: [],
            createdAt: new Date(),
          },
        },
        upsert: true,
      },
    }));

    const result = await ClothingItem.bulkWrite(operations);

    console.log("WTWR catalog seeding complete.");
    console.log(`New catalog items added: ${result.upsertedCount}`);
    console.log("Existing catalog items left unchanged.");
  } catch (error) {
    console.error("Catalog seeding failed:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedCatalog();
