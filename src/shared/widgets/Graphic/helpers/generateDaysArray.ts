function getRandomInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDaysArray(start: string, end: string) {
    const arr = [];
    const dt = new Date(start);
    while (dt <= new Date(end)) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

export function generateRandomValuesForRange(startDate: string, endDate: string) {
    const daysArray = getDaysArray(startDate, endDate);
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    return daysArray.map(day => {
        const dayName = `${day.getDate()} ${monthNames[day.getMonth()]}`;
        const randomValue = getRandomInRange(100, 200);
        return {
            name: dayName,
            value: randomValue
        };
    });
}

