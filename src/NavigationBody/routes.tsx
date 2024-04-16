import React from "react";
import { MovieDetails } from "../pages";
import AppRoutes from "./routeConstants";

const getRoutes=[
    {
        path: AppRoutes.MovieList,
        options: {
            headerShown: false,
        },
        component: (props: React.PropsWithChildren) => <MovieDetails { ...props } />,
    },
];
//     {
//         path: AppRoutes.FlightsListingPage,
//         options: { headerShown: false },
//         component: props => (
//             <Suspense fallback=''>
//                 <FlightsListingPage {...props} />
//             </Suspense>
//         ),
//     },
//     {
//         path: AppRoutes.FlightReviewPage,
//         options: { headerShown: false },
//         component: props => (
//             <Suspense fallback=''>
//                 <FlightReviewPage {...props} />
//             </Suspense>
//         ),
//     },
//     {
//         path: AppRoutes.FlightThankYouPage,
//         options: { headerShown: false },
//         component: props => (
//             <Suspense fallback=''>
//                 <FlightThankYouPage {...props} />
//             </Suspense>
//         ),
//     },
// ];
// if (!isMYB()) {
//     routes.push({
//         path: AppRoutes.DashboardPage,
//         options: { headerShown: false, gestureEnabled: false },
//         component: props => (
//             <Suspense fallback=''>
//                 <DashboardPage {...props} />
//             </Suspense>
//         ),
//     });
// }
// return routes;

export default getRoutes;
