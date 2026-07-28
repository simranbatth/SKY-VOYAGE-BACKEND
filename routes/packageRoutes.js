const express = require("express");
const router = express.Router();

const {
    getPackages,
    getPackageById,
    addPackage
} = require("../controllers/packageController");


router.get("/", getPackages);

router.get("/:id", getPackageById);

router.post("/", addPackage);


module.exports = router;