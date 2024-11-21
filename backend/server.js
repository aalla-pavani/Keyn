const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000; // Backend server port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const uri = "mongodb+srv://<mongodb>:<mongodb>@cluster0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("Error connecting to MongoDB:", error));

// Sample Schema and Model
const SampleSchema = new mongoose.Schema({
    name: String,
    value: Number,
});

const SampleModel = mongoose.model("Sample", SampleSchema);

// Sample API Routes
app.get("/data", async (req, res) => {
    try {
        const data = await SampleModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/data", async (req, res) => {
    try {
        const newData = new SampleModel(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
