declare module "react-native-dotenv" {
    export const REACT_APP_BASE_API_URL: string;
    export const REACT_APP_BASE_WEB_URL: string;
    export const NODE_ENV: string;
}

interface IApiData {
    url: string;
    type?: "GET" | "POST";
    params: string | object;
}

type IFallbackData = { data?: unknown };
