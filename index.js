const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
console.log(path.join(__dirname,'front','build'));
const reactBuild = path.join(__dirname,'front','build');
app.use(express.static(reactBuild));
//

app.get('/',async(req,res)=>{
    res.send({message:"hello"});
});
app.get('*',async()=>{
    res.sendFile(path.join(reactBuild,'index.html'));
});

app.listen(PORT,()=>console.log('server is running on'+PORT));