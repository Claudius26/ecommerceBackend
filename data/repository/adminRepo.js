import Admin from "../model/admin.js";

class adminRepo {
  async createAdmin(admin) {
    try {
      return await Admin.create(admin);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findByEmail(email) {
    try {
      return await Admin.findOne({ email });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async removeAdmin(email) {
    try {
      return await Admin.findOneAndDelete({ email });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateAdmin(id, updateData) {
    try {
      return await Admin.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteMany() {
    return await Admin.deleteMany();
  }
}

export default new adminRepo();
