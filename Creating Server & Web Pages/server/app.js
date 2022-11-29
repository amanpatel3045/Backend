const express = require("express");
// app k andr express ke sare functions and properties aa chuke hai bcz const app=express() likha hai
const app = express();
//line no 5 home page ko represent karega
app.get("/", (req, res) => {
  //res.send me jo likha hai wo home page pe show hoga
  res.send(`Hello world from the server, you are on Home Page`);
});



//ALL PAGES =>HOME,ABOUT,CONTACT,SIGNIN,SIGNUP KO BACKEND KI HELP SE CREATE KRO.....
// now about page ke liye app.get likho
app.get("/about",(req,res)=>{
    res.send(`You are on about page`);
});

//now contact page k liye app.get likho taaki user /contact pe jaye toh use mera 
//res.get me jp likha hai wo dikhe

app.get("/contact",(req,res)=>{
    res.send(`You are on contact page`);
});

//now signin page ke liye
app.get("/signin",(req,res)=>{
    res.send(`You are on sign in page`);
});

//now signup page ke liye
app.get("/signup",(req,res)=>{
    res.send(`You are on signup page`);
});

// now server ko btaao ki user / wale page pe visit kr rha hai
//toh iske liye app.listen use kr rha

app.listen(3000, () => {
  console.log("server is running at port number 3000");
});
