import Product from "../model/product";

class ProductRepo {
  async createProduct(productData) {
    return await Product.create(productData);
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async findAll() {
    return await Product.find();
  }

  async updateProduct(id, updateData) {
    return await Product.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }
}

export default new ProductRepo();
