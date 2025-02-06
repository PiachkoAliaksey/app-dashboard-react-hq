export function isRedColor(value: string|number) {
    return value.toString().slice(0,1) === '-' ? true : false
}