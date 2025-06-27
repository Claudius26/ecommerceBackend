import adminRepo from "../../../data/repository/adminRepo";
import userRepo from "../../../data/repository/userRepo";

async function updateAdmin(emial, updateData) {
  const admin = await adminRepo.findByEmail(emial);
  if (!admin) throw new Error("admin does not exist");
  return await adminRepo.updateAdmin(admin._id, updateData);
}

export default updateAdmin;
