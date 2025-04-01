const Product = require('../models/product');

const get = async (req, res) => {
    const data = await Product.find({}).limit(req.query.limit);
    if (!data) {
        res.status(404).json({ success: false, message: 'No product found' });
        return;
    }
    res.json({ data, success: true, message: 'Product found' });
};

const create = async (req, res) => {
    try {
        const shoes = new Product({
            name: req.body.name,
            price: req.body.price,
            des: req.body.des,
            images: req.body.images,
            brand: req.body.brand,
            slug: req.body.name.toLowerCase().replace(/ /g, '-'),
        });
        await shoes.save();
        res.json({ success: true, message: 'Add product successfully' });
        return;
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Add product has an error!',
        });
        return;
    }
};

const getDetail = async (req, res) => {
    const data = await Product.findOne({ slug: req.params.slug });

    res.json({ data });
};

const getByBrand = async (req, res) => {
    const data = await Product.find({ brand: req.params.slug });
    if(!data) {
        res.status(500).json({
            success: false,
            message: 'Products not found!',
        });
    }
    res.json({ data, success: true });
};

const remove = async (req, res) => {
    try {
        await Product.findOneAndDelete({ _id: req.params.id });
        const data = await Product.find({});
        res.json({
            data,
            success: true,
            message: 'Product deleted successfully',
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const edit = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);
        res.json({ data, success: true });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const update = async (req, res) => {
            const slug = req.body.name.toLowerCase().replace(/ /g, '-');
            const data = await Product.findByIdAndUpdate(req.params.id, {...req.body, slug}, {
        new: true,
    });
    try {
        data.slug = req.body.name.toLowerCase().replace(/ /g, '-')
        // await data.save()
        // Không cần save() vì findByIdAndUpdate tự động thay đổi trong database
        // Sử dụng save() khi thay đổi trực tiếp trong database
        if (!data) {
            return res
                .status(404)
                .json({ success: false, message: 'Product not found' });
        }
        res.json({
            data,
            success: true,
            message: 'Product updated successfully',
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = { get, getDetail, getByBrand, create, remove, edit, update };
