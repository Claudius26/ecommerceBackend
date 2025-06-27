import mongoose from "mongoose";
import connectDB from "../src/config/db.js";
import Product from "../data/model/product.js";
import productRepo from "../data/repository/productRepo.js";
import Category from "../data/model/category.js";
import Admin from "../data/model/admin";
import adminRepo from "../data/repository/adminRepo.js";
import categoryRepo from "../data/repository/categoryRepo.js";
import { describe, expect, test, beforeAll, afterEach, afterAll } from "vitest";

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

  test("productRepo can create product", async () => {
    const admin = await Admin.create({
      email: "admin2@gmail",
      password: "password123",
      role: "Admin",
    });
    const category = await Category.create({
      name: "Clothing",
      adminId: admin._id,
    });
    const productData = {
      name: "Product 1",
      description: "Description 1",
      category: category._id,
      price: 100,
      quantity: 10,
      image: "http://example.com/image.jpg",
    };
    const product = await productRepo.createProduct(productData);
    expect(product).toBeDefined();
    expect(product.name).toBe(productData.name);
    expect(product.description).toBe(productData.description);
    expect(product.category.toString()).toBe(
      productData.category._id.toString()
    );
    expect(product.price).toBe(productData.price);
    expect(product.quantity).toBe(productData.quantity);
    expect(product.image).toBe(productData.image);
  });
});
