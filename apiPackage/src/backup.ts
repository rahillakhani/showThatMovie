// import { useQuery, UseQueryResult } from "@tanstack/react-query";
// import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";
// // import React, { cloneElement, useEffect } from "react";
//
// interface IApiData {
//     url: string;
//     type?: "GET" | "POST";
//     params: string | object;
// }
//
// type IFallbackData = { data?: unknown };
//
// const apiCallList: Record<string, Function> = {
//     POST: axios.post,
//     GET: axios.get,
//     DELETE: axios.delete,
//     OPTIONS: axios.options,
//     PUT: axios.put,
// };
//
// export const fetchResolvedData = (apiData: IApiData, cb?: (data: UseQueryResult | IFallbackData) => void): UseQueryResult => {
//     /* *
//     USAGE: You must wrap the app or component inside QueryClientProvider, else use fetchApiData
//      directly
//     function App() {
//           return (
//             <div className="App">
//                 <QueryClientProvider client={new QueryClient({})}>
//                     <DataConsumer />
//                 </QueryClientProvider>
//
//             </div>
//           );
//         }
//     * */
//     try {
//         const resolvedData = useQuery<any, AxiosError>({
//             initialData: undefined,
//             queryKey: [apiData.url],
//             queryFn: () => fetchApiData(apiData),
//             networkMode: "online",
//             retry: 1,
//             refetchOnWindowFocus: false,
//             staleTime: 0,
//             gcTime: 0,
//         });
//         // if (isDev) {
//         //     if (resolvedData.data) {
//         //         console.log("data in UQ", resolvedData.data.data);
//         //     }
//         //     if (resolvedData.error) {
//         //         return { error: "request failed", data: null, isFetching: null };
//         //     }
//         // }
//
//         if (cb) {
//             cb(resolvedData);
//         }
//         return resolvedData;
//     } catch (err) {
//         // TODO: it is a fallback for api fetching
//         console.log("err in try catch", err && err);
//         // let resolvedData = {}
//         // // let data: IFallbackData = {};
//         // fetchApiData(apiData)
//         //         .then((response) => {
//         //             resolvedData = response?.data;
//         //
//         //             console.log("response.data", response?.data);
//         //         })
//         //         .catch((err) => {
//         //             resolvedData = {};
//         //             console.log("err fetch", err && err);
//         //         });
//         // if (cb) {
//         //     cb(data);
//         //     return;
//         // }
//         // return resolvedData;
//         // return { data: null };
//     }
// };
//
// export const fetchApiData = async ({ type = "GET", url = "", params = "" }): Promise<AxiosPromise> => {
//     return apiCallList[type](url, { params });
// };
//
// // export const ResolvedDataComponent = ({ children, apiData } : { children: React.ElementType, apiData: IApiData }) => {
// //     const [fetchedData, setFetchedData] = React?.useState({});
// //     useEffect(() => {
// //         fetchResolvedData(apiData, setFetchedData);
// //     }, []);
// //     return <QueryClientProvider client={new QueryClient({})}>
// //         {cloneElement(children, { data: fetchedData })}
// //     </QueryClientProvider>;
// // };
export default {};
