import express from "express";
const app = express();
const port = 3000;

// 3000 is the port where the server is running
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // just a simple callback function that has a console.log showing its running
});
