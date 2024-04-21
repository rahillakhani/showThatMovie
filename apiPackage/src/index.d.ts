
interface IApiData {
    url: string;
    type?: "GET" | "POST";
    params: string | object;
}

type IFallbackData = { data?: unknown };
