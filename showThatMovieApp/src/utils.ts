import { NODE_ENV } from "react-native-dotenv";

export const isDev = NODE_ENV != "production";
