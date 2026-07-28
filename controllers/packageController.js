const Package = require("../model/Package");


// GET ALL PACKAGES
const getPackages = async (req, res) => {

    try {

        const packages = await Package.find();

        res.status(200).json(packages);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// GET SINGLE PACKAGE
const getPackageById = async (req, res) => {

    try {

        const pkg = await Package.findById(req.params.id);


        if (!pkg) {

            return res.status(404).json({
                message: "Package not found"
            });

        }


        res.status(200).json(pkg);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// ADD PACKAGE
const addPackage = async (req, res) => {

    try {

        const newPackage = new Package(req.body);

        await newPackage.save();


        res.status(201).json({
            message: "Package Added Successfully",
            package: newPackage
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



module.exports = {
    getPackages,
    getPackageById,
    addPackage
};