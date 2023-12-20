const express = require("express");
let router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Product } = require("../../models/product");

// // get all products 
// router.get('/', async (req, res) => {
//     // console.log(req.user);
//     let page = Number(req.query.page ? req.query.page : 1);
//     let perPage = Number(req.query.perPage ? req.query.perPage : 5);
//     let skipRecords = (perPage * (page - 1));
//     let products = await Product.find().skip(skipRecords).limit(perPage);
//     let total = await Product.countDocuments();
//     return res.send({total, products});
// });

router.get('/', async (req, res) => {
    let products = await Product.find();
    let total = await Product.countDocuments();
    return res.send({ total, products });
});

// get single product 
router.get('/:id', async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product)
            return res.status(400).send("Product with given ID is not Present"); // when id is not present in db
        return res.send(product);//everything is ok
    } catch (err) {
        return res.status(400).send("Invalid ID");// format of id is not corect
    }    
});

//update a record
// validateProduct, auth,admin,
router.put("/:id", async (req, res) => {
    let product = await Product.findById(req.params.id);
    product.name = req.body.name;
    product.price = req.body.price;
    await product.save();
    return res.send(product);
});

//Delete a record
// auth, admin, 
router.delete("/:id", async (req, res) => {
    let product = await Product.findByIdAndDelete(req.params.id);
    return res.send(product);

});

//Insert a record
// auth,  validateProduct,
router.post("/", auth, validateProduct, async (req, res) => {
    let product = new Product();
    product.name = req.body.name;
    product.price = req.body.price;
    await product.save();
    return res.send(product);
  });

module.exports = router;