import adminRepo from "../../../data/repository/adminRepo";
import userRepo from "../../../data/repository/userRepo";

async function removeAdmin(email) {
  const admin = await adminRepo.findByEmail(email);
  if (!admin) throw new Error("admin does not exist");
  return await adminRepo.removeAdmin(email);
}
export default removeAdmin;
