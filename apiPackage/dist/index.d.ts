import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

type AsyncThunkConfig = {
    state?: unknown;
    dispatch?: Dispatch;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
};

declare const fetchMovies: _reduxjs_toolkit.AsyncThunk<any, {
    title: string;
    year: string;
}, AsyncThunkConfig>;
declare const fetchMoviesDetails: _reduxjs_toolkit.AsyncThunk<any, string, AsyncThunkConfig>;

export { fetchMovies, fetchMoviesDetails };
