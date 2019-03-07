export type Transform = (x: string) => string;
export const formatName = function (first: string, last: string, transform?: Transform): string {
    const response = `${last}, ${first}`;
    return transform ? transform(response) : response;
}

export const PI = 3.1415;

export function wrap(chars: string): Transform {
    return (x) => `${chars}${x}${chars}`;
}

export function isEven(n: number): boolean {
    return n % 2 === 0;
}