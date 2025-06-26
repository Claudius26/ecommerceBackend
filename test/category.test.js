import mongoose from "mongoose";
import Category from "../data/model/category.js";
import Admin from "../data/model/admin.js";
import { describe, expect, test, beforeAll, afterEach, afterAll } from "vitest";

describe("categoryRepo", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost:27017/test");
  });

  afterEach(async () => {
    await mongoose.connection.db.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("category repo can create category", async () => {
    const admin = await Admin.create({
      email: "admin@gmail",
      password: "password123",
      role: "Admin",
    });
    const categoryData = {
      name: "Category 1",
      adminId: admin._id,
    };
    const category = await Category.create(categoryData);
    expect(category.name).toBe(categoryData.name);
  });
});
