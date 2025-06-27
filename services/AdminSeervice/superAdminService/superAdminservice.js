import adminRepo from "../../../data/repository/adminRepo";
import userRepo from "../../../data/repository/userRepo";
import createAdmin from "./createAdmin";
import removeAdmin from "./removeAdmin";
import updateAdmin from "./updateAdmin";

class superAdminService {
  constructor(adminRepo, userRepo) {
    this.adminRepo = adminRepo;
    this.userRepo = userRepo;
  }

  createAdmin = createAdmin;
  removeAdmin = removeAdmin;
  updateAdmin = updateAdmin;
}

export default new superAdminService();
