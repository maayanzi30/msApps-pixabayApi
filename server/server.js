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

const getImages = async (query) => {
  return await axios.get(`${pixabayApiUrl}&q=${query}`);
};

app.get("/", async (req, res) => {
  const query = req.query.value;
  index = 0;
  const resp = await getImages(query);

  const results =
    resp && resp.data ? JSON.parse(JSON.stringify(resp.data)) : [];

  images = [...results.hits];

  const firstImages = [];
  for (let i = 0; i < 9; i++) {
    firstImages.push(images[i]);
  }

  res.json({ images: firstImages });
});

app.get("/next", async (req, res) => {
  res.json(getNineImages("next"));
});

app.get("/prev", async (req, res) => {
  res.json(getNineImages("prev"));
});

app.get("/sort/", async (req, res) => {
  const sortBy = req.query.sortBy;
  switch (sortBy) {
    case "id":
      images = images.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
      break;
    case "downloads":
      images = images.sort((a, b) =>
        a.downloads > b.downloads ? 1 : b.downloads > a.downloads ? -1 : 0
      );
      break;
    case "likes":
      images = images.sort((a, b) =>
        a.likes > b.likes ? 1 : b.likes > a.likes ? -1 : 0
      );
      break;
  }

  const firstImages = [];
  for (let i = 0; i < 9; i++) {
    firstImages.push(images[i]);
  }

  res.json({ images: firstImages });
});

app.listen(
  PORT,
  console.log(`Server is running ${process.env.NODE_ENV} mode on port ${PORT}`)
);
