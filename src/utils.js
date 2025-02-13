export const toFixed = (num) => {
    if (Number.isInteger(num)) return num;

    return num.toFixed(1);
}