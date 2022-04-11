const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
// this we have to write when our local host deny to connect with another local host.
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  //  access-control-allow-credentials:true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// first database
mongoose
  .connect(
      "mongodb+srv://tejas:ab@cluster0.bczol.mongodb.net/test",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("success!!");
  });

const schema = new mongoose.Schema({
  name: String,
  comment: String,
  ratting: Number,
});

const schema2 = new mongoose.Schema({
  sname: String,
  smail: String,
  spass: String,
});

const schemaformembership = new mongoose.Schema({
  name: String,
  lmail: String,
  lpass: String,
  referral: String,
});

const schemaforreferral = new mongoose.Schema({
  code: String,
  ExpireDate: Date,
});
//first collectiion
const mod = new mongoose.model("Blog", schema);
//second collection
const mod2 = new mongoose.model("userlogin", schema2);
// third database for referral code
const referral = new mongoose.model("referral", schemaforreferral);
// fourth database for membership
const membership = new mongoose.model("members", schemaformembership);

const data = new referral({
  code: "tejas",
  ExpireDate: new Date("2022-01-22"),
});
// data.save();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "build", "index.html"));
});

app.use(express.json());
app.post("/adddata", (req, res) => {
  console.log("as");
  let data = req.body;
  let val = new mod(data);
  val.save();
});

//ratting which users give
app.post("/addratting", async (req, res) => {
  const datacomming = await req.body;
  // console.log(datacomming.title);
  await mod2.updateOne(
    {
      title: datacomming.title,
    },
    {
      ratting: datacomming.ratting,
    }
  );
  npm;
  console.log(req.body.ratting);
});

app.post("/datastore", async (req, res) => {
  let data = await mod.find();

  res.send(data);
});

app.post("/joinuser", async (req, res) => {
  let data = req.body;
  console.log(data);
  const b1 = new mod2(data);
  b1.save();
});

app.post("/searchuser", async (req, res) => {
  const valfors = req.body;

  // let da = await mod2.find({
  //   $and: [{ smail: valfors.lmail }, { spass: valfors.lpass }],
  // });

  let da2 = await referral.find({ code: valfors.referral });

  let referralok = 0;
  for (let i = 0; i < da2.length; i++) {
    if (da2[i].code == valfors.referral && da2[i].ExpireDate >= new Date()) {
      referralok = 1;
    }
  }

  if (referralok) {
    const b1 = new membership(valfors);
    b1.save();
    res.send({ result: true });
  } else {
    res.send({ result: false });
  }
});

app.use(express.urlencoded({ extended: false }));

// route for verifying user for primum blogs.

app.post("/getmemberemail", async (req, res) => {
  const emailtofind = req.body.email;
  const getmailfromdb = await membership.find({}, { lmail: 1, _id: 0 });
  let find = 0;
  getmailfromdb.map((item) => {
    if (item.lmail === emailtofind) {
      find = 1;
    }
  });
  res.send({ find: find });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("success!!");
});
