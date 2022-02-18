const apiKey = "";

const NFY = require("../lib/index");
const nextverify = new NFY(apiKey);

nextverify.isUserLinked("0").then((user) => {
    console.log("Ran successfully");
    console.log("User Status: " + user.linked);
}).catch((err) => {
    console.log("Error!");
    console.log(err);
});