const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my REST API");
});

app.get("/applications", (req, res) => {
    res.json({
        message: "Application list fetched successfully",
        applications: [
            {
                id: 1,
                name: "Node.js Developer"
            },
            {
                id: 2,
                name: "DevOps Engineer"
            }
        ]
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
