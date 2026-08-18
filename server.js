app.get("/api/debug-db", async (req, res) => {
  try {
    await connectDB();

    const Package = require("./model/Package");

    const packages = await Package.find();

    res.json({
      database: Package.db.name,
      collection: Package.collection.name,
      count: packages.length
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});