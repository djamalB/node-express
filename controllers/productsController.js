exports.getProducts = (req, res) => {
  res.json({ message: "Список продуктов" });
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Продукт с ID ${productId}` });
};

exports.createProduct = (req, res) => {
  res.json({ message: "Продукт создан" });
};

exports.deleteProductById = (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Продукт с ID ${productId} удален` });
};