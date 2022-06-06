// import { DONATION_MODEL } from "../src/constants";
import express from "express";
import Redis from "ioredis";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new Redis(process.env.REDIS_URL);

app.get("/api", async (req, res) => {
  const exists = await client.hexists("putty-model", "totalDonators");
  if (exists === 0) {
    res.status(200).json({ message: "ok", data: "field does not exist" });
    return;
  }

  const response = await client.hgetall("putty-model");
  const {
    donationGoal,
    donationMin,
    donationNeeded,
    donationDuration,
    startDate,
    totalDonators,
  } = response;

  const DONATION_MODEL = {
    donationGoal: +donationGoal,
    donationNeeded: +donationNeeded,
    donationDuration: +donationDuration,
    startDate: startDate,
    donationMin: +donationMin,
    totalDonators: +totalDonators,
  };

  res.status(200).json({ message: "ok", data: DONATION_MODEL });
});

app.post("/api/post", (req, res) => {
  const body = req.body;
  client.hset("putty-model", body);
  res.status(200).json({ message: "ok" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
