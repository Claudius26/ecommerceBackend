import mongoose from "mongoose";
import connectDB from "../src/config/db.js";
import Product from "../data/model/product.js";
import addProduct from "../services/sellerService/addProduct.js";
import registerSeller from "../services/sellerService/registerSeller.js";
import { describe, expect, test, beforeAll, afterEach, afterAll } from "vitest";

const VALID_CATEGORY = "Men Clothing";

describe("productRepo", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterEach(async () => {
    await Product.deleteMany();
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  test("seller can add product with valid category", async () => {
    const seller = await registerSeller({
      firstname: "John",
      lastname: "Doe",
      email: "seller1@gmail.com",
      password: "password123",
      phone: "+12345678901",
      address: {
        street: "123 Main St",
        city: "Lagos",
        state: "Lagos",
        postalCode: "100001",
        country: "Nigeria",
      },
      businessName: "Doe Fashion",
      businessDescription: "Trendy clothes for everyone",
    });

    const productRequest = {
      name: "Agbada",
      description: "Traditional Nigerian attire",
      category: VALID_CATEGORY,
      price: 100,
      quantity: 10,
      image: "http://example.com/image.jpg"
    };

    const product = await addProduct(seller._id, productRequest);

    expect(product).toBeDefined();
    expect(product.name).toBe("Agbada");
    expect(product.description).toBe("Traditional Nigerian attire");
    expect(product.category).toBe(VALID_CATEGORY);
    expect(product.price).toBe(100);
    expect(product.quantity).toBe(10);
    expect(product.image).toBe("http://example.com/image.jpg");
    expect(product.seller.toString()).toBe(seller._id.toString());
  });
});
