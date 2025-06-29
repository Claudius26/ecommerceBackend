import mongoose from "mongoose";
import connectDB from "../src/config/db.js";
import User from "../data/model/user.js";
import Cart from "../data/model/cart.js";
import registerCustomer from "../services/customerService/registerCustomer.js";
import { describe, expect, test, beforeAll, afterEach, afterAll } from "vitest";

describe("registerCustomer service", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterEach(async () => {
    await User.deleteMany();
    await Cart.deleteMany();
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  test("registerCustomer registers a new customer and creates a cart", async () => {
    const customerData = {
      firstname: "Alice",
      lastname: "Wonderland",
      email: "alice@example.com",
      password: "securePassword1",
      phone: "+12345678903",
      address: {
        street: "789 Main St",
        city: "Dreamland",
        state: "TX",
        postalCode: "67890",
        country: "USA",
      },
    };

    const customer = await registerCustomer(customerData);
    expect(customer).toBeDefined();
    expect(customer.firstname).toBe("Alice");
    expect(customer.role).toBe("Customer");
    expect(customer.cart).toBeDefined();

   
    const cart = await Cart.findById(customer.cart);
    expect(cart).toBeDefined();
    expect(cart.userId.toString()).toBe(customer._id.toString());
    expect(cart.items.length).toBe(0);
  });
});
