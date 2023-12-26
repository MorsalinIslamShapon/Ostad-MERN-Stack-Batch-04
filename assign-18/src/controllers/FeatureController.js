//create feature
exports.featureList = async (req, res) => {
    try {
      const createdBrand = await featureModel.create(req.body);
      res
        .status(200)
        .json({ message: "Data created successfully", data: createdBrand });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error creating brand data", error: err.message });
    }
  };
  