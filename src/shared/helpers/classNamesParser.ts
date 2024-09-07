export function classNames(...classes: (string | undefined | Record<string, boolean>)[]) {
    // Фильтрация строк
    const filteredClasses = classes.filter((el): el is string => typeof el === 'string');

    // Фильтрация объектов и маппинг по ним
    const filteredObjects = classes
        .filter((el): el is Record<string, boolean> => typeof el === 'object' && el !== null)
        .map((object) => {
            return Object.keys(object).filter((key) => {
                return object[key] && typeof object[key] === 'boolean' && key && key !== 'undefined';
            });
        })
        .flat();

    return [...filteredClasses, ...filteredObjects].join(' ');
}
