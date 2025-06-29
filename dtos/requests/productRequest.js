const productRequest = {
  name: {
    type: "string",
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  description: {
    type: "string",
    required: true,
    minLength: 3,
    maxLength: 500,
  },
  category: {
    type: "string",
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  price: {
    type: "number",
    required: true,
    min: 0,
  },
  quantity: {
    type: "number",
    required: true,
    min: 0,
  },
  Image: {
    type: "string",
    required: true,
    pattern: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i, 
  },
  };

export default productRequest;

