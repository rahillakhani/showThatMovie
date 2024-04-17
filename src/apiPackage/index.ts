import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

interface ApiData {
    url: string;
    type?: "GET" | "POST";
    params: string | object;
}

const apiCallList = {
    "POST": axios.post,
    "GET": axios.get,
    "DELETE": axios.delete,
    "OPTIONS": axios.options,
    "PUT": axios.put,
}

export const fetchData = (apiData: ApiData, cb?: Function): UseQueryResult => {
    try {

        const resolvedData = useQuery<any, AxiosError>(
            {
                initialData: undefined,
                queryKey: [apiData.url],
                queryFn: () => fetchApiData(apiData),
                networkMode: "online",
                "retry": 1,
                "refetchOnWindowFocus": false
            }
        );
        // console.log("resolvedData", JSON.stringify(resolvedData));
        if (resolvedData.error) {
            // console.log("resolvedData.error", JSON.stringify(resolvedData.error));
            return { error: "request failed", data: null, isFetching: null };
        }
        if (cb) {
            cb(resolvedData);
            return;
        }
        return resolvedData;
    } catch (err) {
        console.log("err", err);
        fetchApiData(apiData);
        return;
    }

};

const fetchApiData = async ({ type = "GET", url = "", params = "" }: ApiData) : Promise<AxiosResponse> => {
    return apiCallList[type](url, { params })
};
