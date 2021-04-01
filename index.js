const express = require("express");
const app = express();
const port = process.env.PORT || 3080;

const users = [
  { firstName: "Hannah", lastName: "Zuber", email: "hannah.zuber@vayyar.com" },
  { firstName: "Alon", lastName: "Berman", email: "alon.berman@vayyar.com" },
  { firstName: "Ohad", lastName: "Petrushka", email: "ohad.petrushka@vayyar.com" },
];

app.get("/api/", (req, res) => {
  res.send(`Hello World! This is the basic call.`);
});

app.get("/api/users", (req, res) => {
  console.log("/users called!");
  res.json(users);
});

app.post('/api/user', function (req, res) {
  console.log("body is ", req.body)
  const user = req.body;
  console.log('Adding user:::::', user);
  users.push(user);
  console.log("all users: ", users)
  res.json("user added");
});

app.listen(port, () => {
  console.log(`Vayyar node app listening at http://localhost:${port}`);
});
