import { UseQueryResult, useSuspenseQuery, UseSuspenseQueryResult } from "@tanstack/react-query";
import axios, { AxiosError, AxiosPromise } from "axios";

// import React, { cloneElement, useEffect } from "react";

interface IApiData {
    url: string;
    type?: "GET" | "POST";
    params: string | object;
}

type IFallbackData = { data?: unknown };

const apiCallList: Record<string, Function> = {
    POST: axios.post,
    GET: axios.get,
    DELETE: axios.delete,
    OPTIONS: axios.options,
    PUT: axios.put
};

export const fetchResolvedData = (apiData: IApiData, cb?: (data: UseQueryResult | IFallbackData) => void): UseSuspenseQueryResult => {
    /* *
    USAGE: You must wrap the app or component inside QueryClientProvider, else use fetchApiData
     directly
    function App() {
          return (
            <div className="App">
                <QueryClientProvider client={new QueryClient({})}>
                    <DataConsumer />
                </QueryClientProvider>

            </div>
          );
        }
    * */
    // try {
    const resolvedData = useSuspenseQuery<any, AxiosError>({
        initialData: undefined,
        queryKey: [apiData.url],
        queryFn: () => fetchApiData(apiData),
        networkMode: "online",
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 0,
        gcTime: 0
    });
    // if (isDev) {
    //     if (resolvedData.data) {
    //         console.log("data in UQ", resolvedData.data.data);
    //     }
    //     if (resolvedData.error) {
    //         return { error: "request failed", data: null, isFetching: null };
    //     }
    // }

    if (cb) {
        cb(resolvedData);
    }
    return resolvedData;
    // } catch (err) {
    // TODO: it is a fallback for api fetching
    // console.log("err in try catch", err && err);
    // return err;
    // let resolvedData = {}
    // // let data: IFallbackData = {};
    // fetchApiData(apiData)
    //         .then((response: AxiosResponse) => {
    //             resolvedData = response?.data;
    //
    //             console.log("response.data", response?.data);
    //         })
    //         .catch((err) => {
    //             resolvedData = err;
    //             console.log("err fetch", err && err);
    //         });
    // if (cb) {
    //     cb(resolvedData);
    // }
    // return resolvedData;
    // return { data: null };
    // }
};

export const fetchApiData = async ({
                                       type = "GET",
                                       url = "",
                                       params = ""
                                   }: IApiData): Promise<AxiosPromise> => {
    return apiCallList[type](url, { params });
};

export const fetchAxiosData = () => {
    return {
        data: null,
        error: null,
        status: null,
        isError: false,
        isSuccess: false,
    }
}
