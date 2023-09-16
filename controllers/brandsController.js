exports.getBrands = (req, res) => {
  res.json({ message: "Список брендов" });
};

exports.createBrand = (req, res) => {
  res.json({ message: "Бренд создан" });
};

exports.deleteBrands = (req, res) => {
  res.json({ message: "Бренды удалены" });
};
