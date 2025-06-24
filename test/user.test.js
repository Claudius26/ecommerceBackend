import mongoose from "mongoose";
import User from "../src/model/user.js";
import request from "supertest";
import dotenv from "dotenv";
import app from "../server.js";

dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});
afterAll(async () => {
  await mongoose.connection.close();
});
afterEach(async () => {
  await User.deleteMany();
});

describe("User Model Tests", () => {
  it("should create a user successfully", async () => {
   const res = await request(app)
      .post("/api/users/register")
      .send({
        firstname: "John",
        lastname: "Doe",
        email: "john@gmail.com",
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
      });
  })
})

expect(res.statusCode).toBe(201);
expect(res.body.user).toBeDefined();