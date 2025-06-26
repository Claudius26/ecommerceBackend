import Category from "../model/category.js";

class categoryRepo {
  async createCategory(categoryData) {
    const category = await Category.create(categoryData);
    return category;
  }
}
export default new categoryRepo();
