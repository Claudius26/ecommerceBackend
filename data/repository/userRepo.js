import User from "../model/user.js";

class userRepo {
  async createUser(userData) {
    return await User.create(userData);
  }
  async findAllUsers() {
    return await User.find({});
  }
  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }

  async findById(id) {
    return await User.findById(id);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async updateUser(id, updateData) {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  }
}

export default new userRepo();
