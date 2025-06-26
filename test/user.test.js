import mongoose from "mongoose";
import connectDB from "../src/config/db.js";
import User from "../data/model/user.js";
import userRepo from "../data/repository/userRepo.js";
import { describe, expect, test, beforeAll, afterEach, afterAll } from "vitest";

describe("userRepo", () => {
  beforeAll(async () => {
    await connectDB(); 
  });

  afterEach(async () => {
    await User.deleteMany();
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });
test("userRepo can create user", () => {
 
const userData = {
    firstname: "John",
    lastname: "Doe",
    email: "johnDoe@gmail.com",
    password: "password123",
    phone: "+12345678901",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345",
      country: "USA"
    },
    isAdmin: false
  };

const user = userRepo.createUser(userData);
    expect(user).toBeDefined();
    expect(user.firstname).toBe("John");
    expect(user.lastname).toBe("Doe");
    expect(user.email).toBe("johnDoe@gmail.com");
  });
});
