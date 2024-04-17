import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

interface ApiData {
    url: string;
    type?: "GET" | "POST";
    params: string | object;
}

const apiCallList = {
    POST: axios.post,
    GET: axios.get,
    DELETE: axios.delete,
    OPTIONS: axios.options,
    PUT: axios.put
};

export const fetchData = (apiData: ApiData, cb?: Function): UseQueryResult => {
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
        if (resolvedData.data) {
            console.log("data", data);
        }
        if (resolvedData.error) {
            return { error: "request failed", data: null, isFetching: null };
        }
        if (cb) {
            cb(resolvedData);
            return;
        }
        return resolvedData;
    } catch (err) {
        console.log("err", err);
        let data: unknown = {};
        fetchApiData(apiData)
            .then((response) => (data = response.data))
            .catch(err => {
                data = {}
                console.log("err fetch", err);
            });
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
