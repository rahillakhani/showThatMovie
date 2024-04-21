import { UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { AxiosPromise } from "axios";
interface IApiData {
    url: string;
    type?: "GET" | "POST";
    params: string | object;
}
type IFallbackData = {
    data?: unknown;
};
export declare const fetchResolvedData: (apiData: IApiData, cb?: (data: UseQueryResult | IFallbackData) => void) => UseSuspenseQueryResult;
export declare const fetchApiData: ({ type, url, params }: IApiData) => Promise<AxiosPromise>;
export {};
