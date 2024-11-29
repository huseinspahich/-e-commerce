import express from "express";
import cors from "cors";
import pg from "pg";
import env from "dotenv";
import allProducts from "./data/allProducts.js"; 

env.config();
const app = express();
const port = 3000;

// Služi statičke slike iz foldera public/images
app.use("/images", express.static("public/images"));
app.use(cors());
app.use(express.json());

// Konekcija s bazom podataka
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("Connected to the database");
  }
});

// Funkcija za unos proizvoda u bazu
const insertProducts = async () => {
    try {
      const result = await db.query("SELECT COUNT(*) FROM products");
      if (result.rows[0].count > 0) {
        console.log("Products already exist in the database.");
        return;
      }
      for (const product of allProducts) {
        await db.query(
          `INSERT INTO products (name, category, image, new_price, old_price)
           VALUES ($1, $2, $3, $4, $5)`,
          [
            product.name,
            product.category,
            product.image,
            product.new_price,
            product.old_price,
          ]
        );
        console.log(`Inserted product: ${product.name}`);
      }
      console.log("All products inserted successfully!");
    } catch (error) {
      console.error("Error inserting products:", error.message);
    }
  };
  
// Pokreni unos proizvoda nakon konekcije
db.once("connect", insertProducts);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
