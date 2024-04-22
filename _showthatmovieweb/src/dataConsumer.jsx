import React, {useState} from "react";
// import fetchdata from "fetchdata";
import useQuery from "fetchdata";
// import fetchData from "./fetcher";

export const DataConsumer = () => {

    const [searchInput, setSearchInput] = useState("king");

    console.log("fetchUsers", fetchUsers);
    // console.log("fetcher", fetcher);
    console.log("fetchUsers", (async () => {
        await fetchUsers()
    })());

// console.log("fetchApiData", fetchApiData);
// console.log("fetchData", fetchData);
//     const { data, error, isLoading } = fetchResolvedData({
//         url: "https://search.imdbot.workers.dev",
//         params: { q: JSON.stringify(searchInput) },
//     });
//     if(isLoading) return <>Loading...</>
//     if(error) {
//         console.log("error",error);
//         return <>error encountered</>;
//     }
    return <>
        <input type={"text"} onChange={(el) => {setSearchInput(el.taget.value || "")}}/>
        {/*{data?.data?.description.map(el => el)}*/}
    </>;
};

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

const fetchUsers = async () => {
    const response = await useQuery({
        url: 'https://search.imdbot.workers.dev/?q=kaho+na+pyaar+hai',
        method: 'GET'
    });

    if (response.error) {
        console.error('Error fetching users:', response.error);
    } else {
        console.log('Users:', response.data);
    }
};
