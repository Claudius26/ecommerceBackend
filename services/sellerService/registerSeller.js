import userRepo from "../../data/repository/userRepo.js";
import userRole from "../../data/model/role.js";
import bcrypt from "bcrypt";
import Seller from "../../data/model/seller.js";


const registerSeller = async (sellerData) => {
  const existingUser = await userRepo.findByEmail(sellerData.email);
  if (existingUser) {
    throw new Error("Email cannot be used, choose a different email");
  }

  const hashedPassword = await bcrypt.hash(sellerData.password, 10);

  const seller = await Seller.create({
    firstname: sellerData.firstname,
    lastname: sellerData.lastname,
    email: sellerData.email,
    password: hashedPassword,
    phone: sellerData.phone,
    address: sellerData.address,
    businessName: sellerData.businessName,
    businessDescription: sellerData.businessDescription,
    role: userRole.SELLER,
  });

  return seller;
};

export default registerSeller;
