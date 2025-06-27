import mongoose from "mongoose";
import connectDB from "../src/config/db.js";
import Admin from "../data/model/admin.js";
import { describe, expect, test, beforeAll, afterEach, afterAll } from "vitest";

describe("adminRepo", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterEach(async () => {
    await Admin.deleteMany();
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  test("adminRepo can create admin", async () => {
    const adminData = {
      email: "admin@gmail",
      password: "password123",
      role: "Admin",
    };
    const admin = await Admin.create(adminData);
    expect(admin.email).toBe(adminData.email);
  });
});
