const {Admin} = require("../models/admin.model");
const {Category} = require("../models/category.model");
const {Product} = require("../models/product.model");
const {User} = require("../models/user.model");

exports.dashboard = async (req,res) => {
    const admins = await Admin.countDocuments();
    const category = await Category.countDocuments();
    const product = await Product.countDocuments();
    const user = await User.countDocuments();
    const productlist = await Product.find().limit(10).sort({createdAt: -1});


const data = {admins,
    category,
    product,
    user,
    productlist
}

res
.status(200)
.json({
    status:200,
    message:"Admins get successfully",
    data:data
});
}