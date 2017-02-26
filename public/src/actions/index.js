import axios from "axios";

export const UPDATE_RESULTS = 'UPDATE_RESULTS';

let serverUrl = '';

if (typeof CONFIG != 'undefined') {
    serverUrl = CONFIG.paths.url;
}

export function updateResults(data) {
    return {
        type: UPDATE_RESULTS,
        payload: data
    };
}