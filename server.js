import app from "./app.js";
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err,data) => {    
    if(err){
        console.log("Error starting server:", err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});