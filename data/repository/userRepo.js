import User from "../model/user.js";

class userRepo {
  async createUser(userData) {
    try {
      return await User.create(userData);
    } catch (error) {
      if (error.code === 11000) throw new Error("email already exist");
      throw new Error(error.message);
    }
  }

  async findById(id) {
    try {
      return await User.findById(id);
    } catch (error) {
      if (error.message === "CastError")
        throw new Error("Invalid user ID format");
      throw new Error(error.message);
    }
  }

  async findByEmail(email) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateUser(id, updateData) {
    try {
      return await User.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new userRepo();
