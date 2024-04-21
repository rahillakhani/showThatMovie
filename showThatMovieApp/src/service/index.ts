import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { isDev } from "../utils.ts";

interface ApiData {
    url: string;
    type?: "GET" | "POST";
    params: string | object;
}

type IFallbackData = { data?: unknown };

const apiCallList = {
    POST: axios.post,
    GET: axios.get,
    DELETE: axios.delete,
    OPTIONS: axios.options,
    PUT: axios.put
};

export const fetchData = (apiData: ApiData, cb?: (data: UseQueryResult | IFallbackData) => void): UseQueryResult => {
    // TODO: usequery to reduce my boilerplate for data resolution
    try {
        const resolvedData = useQuery<any, AxiosError>({
            initialData: undefined,
            queryKey: [apiData.url],
            queryFn: () => fetchApiData(apiData),
            networkMode: "online",
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 0,
            gcTime: 0
        });
        if (isDev) {
            if (resolvedData.data) {
                console.log("data in UQ", resolvedData.data.data);
            }
            if (resolvedData.error) {
                return { error: "request failed", data: null, isFetching: null };
            }
        }

        if (cb) {
            cb(resolvedData);
            return;
        }
        return resolvedData;
    } catch (err) {
        // TODO: it is a fallback for api fetching
        console.log("err", err);
        let data: IFallbackData = {};
        fetchApiData(apiData)
            .then((response) => {
                data = response.data;

            })
            .catch((err) => {
                data = {};
                console.log("err fetch", err);
            });
        if (cb) {
            cb(data);
            return;
        }
        return data;
    }
};

const fetchApiData = async ({
                                type = "GET",
                                url = "",
                                params = ""
                            }: ApiData): Promise<AxiosResponse> => {
    return apiCallList[type](url, { params });
};
