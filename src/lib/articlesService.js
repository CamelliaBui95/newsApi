import http from './httpServices';

const endPoint = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getArticlesFromApi = (page) => {
    const controller = new AbortController();

    const request = http.get(endPoint + page, {
        headers: {
            "X-Api-Key": apiKey
        },
        signal: controller.signal
    });
    return { request, cancel: () => controller.abort() };
}


