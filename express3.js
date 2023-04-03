const app = require('express')();
const PORT =process.env.PORT||8083;
app.get("",(req,res)=>{
    res.send("Hello World");
});
app.listen(PORT,()=>{
    console.log("Example app listeninbg on port ${port}");
});