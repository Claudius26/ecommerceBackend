import adminRepo from "../../../data/repository/adminRepo";
import userRepo from "../../../data/repository/userRepo";

async function createAdmin(email) {
  const user = await userRepo.findByEmail(email);
  if (!user) throw new Error("user does not exist");
  const adminData = {
    email: user.email,
    password: user.password,
    role: "Admin",
  };

  return await adminRepo.createAdmin(adminData);
}

export default createAdmin;
