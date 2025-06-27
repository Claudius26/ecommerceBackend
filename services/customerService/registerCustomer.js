import userRepo from "../../data/repository/userRepo.js";
import userRole from "../../data/model/role.js";
import bcrypt from "bcrypt";
import Customer from "../../data/model/customer.js";
import Cart from "../../data/model/cart.js";

const registerCustomer = async (customerData) => {
  const existingUser = await userRepo.findByEmail(customerData.email);
  if (existingUser) {
    throw new Error("Email cannot be used, choose a different email");
  }

  const hashedPassword = await bcrypt.hash(customerData.password, 10);

  
  const cart = await Cart.create({
    items: [],
    totalAmount: 0,
    isActive: true,
    userId: null,
  });

  const customer = await Customer.create({
    firstname: customerData.firstname,
    lastname: customerData.lastname,
    email: customerData.email,
    password: hashedPassword,
    phone: customerData.phone,
    address: customerData.address,
    cart: cart._id,
    role: userRole.CUSTOMER,
  });

  
  cart.userId = customer._id;
  await cart.save();

  return customer;
};

export default registerCustomer;
