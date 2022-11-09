import express from "express";
import { config } from "dotenv";
import axios from "axios";
import https from "https";
import cors from "cors";

config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5003;
const pixabayApiKey = process.env.USER_KEY;
const pixabayApiUrl = `https://pixabay.com/api/?key=${pixabayApiKey}`;
/**
 * Disable only in development mode
 */
if (process.env.NODE_ENV === "dev") {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  axios.defaults.httpsAgent = httpsAgent;
  // eslint-disable-next-line no-console
  console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
}

let images = [];
let index = 0;

const getNineImages = (direction) => {
  // Trying to get images with index = 0
  if (direction === "prev" && index === 0) {
    return [];
  }

  // Trying to get the last images
  if (direction === "next" && index + 8 >= images.length) {
    return [];
  }

  const selectedImages = [];
  const startAt = direction === "next" ? index + 8 : index - 8;

  for (let i = startAt; i <= startAt + 8; i++) {
    selectedImages.push(images[i]);
  }

  index = startAt;
  return { images: selectedImages };
};

app.get("/", async (req, res) => {
  const query = req.query.value;
  index = 0;
  const resp = await axios.get(`${pixabayApiUrl}&q=${query}`);

  const results =
    resp && resp.data ? JSON.parse(JSON.stringify(resp.data)) : [];

  images = [...results.hits];

  const fisrtImages = [];
  for (let i = 0; i < 9; i++) {
    fisrtImages.push(images[i]);
  }

  res.json({ images: fisrtImages });
});

app.get("/next", async (req, res) => {
  res.json(getNineImages("next"));
});

app.get("/prev", async (req, res) => {
  res.json(getNineImages("prev"));
});

app.listen(
  PORT,
  console.log(`Server is running ${process.env.NODE_ENV} mode on port ${PORT}`)
);
