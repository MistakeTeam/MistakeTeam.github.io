export function randomNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

// Source - https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// Posted by August Miller, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-16, License - CC BY-SA 4.0
export function scale(number: number, inMin: number, inMax: number, outMin: number, outMax: number) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
