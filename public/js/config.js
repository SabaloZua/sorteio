require("dotenv").config();

const URLWS= process.env.URLWS ;
const WS_URL = "ws://sorteio-production.up.railway.app/";

const STATUS = {
  WIN: "youwin",
  LOSE: "youlose",
};

const ACTIONS = {
  ADMIN: "admin",
  DRAW: "draw",
  CLIENT_COUNT_UPDATE: "clientCountUpdate",
};
