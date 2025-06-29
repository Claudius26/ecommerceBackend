import Seller from "../../data/model/seller.js";
import Product from "../../data/model/product.js";

const addProduct = async (sellerId, productRequest) => {

  if (!sellerId || !productRequest) {
    throw new Error("Seller ID and product details are required");
  }

  if (!productRequest.name || !productRequest.description || !productRequest.category || !productRequest.price || !productRequest.quantity || !productRequest.image) {
    throw new Error("All product fields are required"); 
  }
  const seller = await Seller.findById(sellerId);
  if (!seller) {
    throw new Error("Seller not found");
  }

  const newProduct = await Product.create({
    ...productRequest,
    seller: sellerId,
  });

  return newProduct;

}

export default addProduct;