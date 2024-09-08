import {http, delay, HttpResponse} from 'msw';
import {generateRandomValuesForRange} from "../shared/widgets/Graphic/helpers/generateDaysArray";

export const handlers = [
    http.get('/info-blocks', async () => {
        await delay(1000);
        return HttpResponse.json({loadedFiles: 1456, markedFiles: 123})
    }),
    http.get('/graphics-data', async () => {
        await delay(1000);
        return HttpResponse.json(generateRandomValuesForRange('2024-06-01', '2024-08-31'))
    }),
];


