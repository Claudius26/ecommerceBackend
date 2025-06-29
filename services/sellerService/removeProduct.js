import Product from "../../data/model/product.js";

const removeProduct = async (sellerId, productId) => {
  const product = await Product.findOneAndDelete({
    _id: productId,
    seller: sellerId,
  });

  if (!product) {
    throw new Error("Product not found or unauthorized");
  }

  return product;
};

export default removeProduct;
