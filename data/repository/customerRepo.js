import Customer from "../model/customer.js";

class customerRepo {
  async createCustomer(customerData) {
    return await Customer.create(customerData);
  }
}

export default new customerRepo();
