import mongoose from "mongoose";
import connectDB from "../src/config/db.js";
import User from "../data/model/user.js";
import userRepo from "../data/repository/userRepo.js";
import customerRepo from "../data/repository/customerRepo.js";
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

  test("userRepo can create user", async () => {
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
        country: "USA",
      },
      isAdmin: false,
    };

    const user = await userRepo.createUser(userData);
    expect(user).toBeDefined();
    expect(user.firstname).toBe("John");
    expect(user.lastname).toBe("Doe");
    expect(user.email).toBe("johnDoe@gmail.com");
  });
});

describe("customerRepo", () => {
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

  test("customerRepo creates a customer with role 'Customer'", async () => {
    const customerData = {
      firstname: "Jane",
      lastname: "Smith",
      email: "janeSmith@gmail.com",
      password: "password123",
      phone: "+12345678902",
      address: {
        street: "456 Main St",
        city: "Othertown",
        state: "NY",
        postalCode: "54321",
        country: "USA",
      },
      cart: new mongoose.Types.ObjectId(),
    };

    const customer = await customerRepo.createCustomer(customerData);
    expect(customer).toBeDefined();
    expect(customer.firstname).toBe("Jane");
    expect(customer.role).toBe("Customer");
  });
});
