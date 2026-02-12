import app from "./app.js"
const PORT = process.env.PORT || 3000;

app.listen(PORT,(err, data) => {
    if(err){
        console.log("Error in starting");
    }else{
        console.log(`Server is running at PORT ${PORT}`);
        
    }
})