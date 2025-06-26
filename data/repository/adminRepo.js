import Admin from "../model/admin.js";

class adminRepo {
  async createAdmin(admin) {
    return await Admin.create(admin);
  }
}

export default new adminRepo();
