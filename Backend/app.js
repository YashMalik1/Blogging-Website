const path = require("path");
const express = require("express")
const mongoose = require("mongoose")
const header_middleware = require("./middlewares/header")

const mongodburl = "mongodb+srv://priyansupp:pkj01072003@cluster0.ir1vrth.mongodb.net/blogging-website";


const postRouter = require("./Routes/post");
const userRoutes = require("./Routes/user");
const profileRoutes = require("./Routes/profile");
const stripeRoutes = require("./Routes/stripe");



const app = express()

const PORT = process.env.PORT || 4000

app.use((req, res, next) => {
  console.log("request url", req.originalUrl, req.method);
  next();
})

app.use(express.json({
  verify: (req, res, buf) => {
    if (req.originalUrl.startsWith("/api/stripe")) {
      req.rawBody = buf.toString();
    }
  },
}))
app.use(header_middleware)
const directory = path.join(__dirname, './images');
app.use("/images", express.static(directory));

app.use("/api/posts", postRouter)
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/stripe", stripeRoutes);


app.get('/test', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect(
  mongodburl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
      app.listen(PORT, (req, res) => {
        console.log(`app is listening to PORT ${PORT}`);
      });
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

