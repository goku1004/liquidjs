declare const _default: {
    'join': (v: any[], arg: string) => string;
    'last': <T>(v: T[]) => T;
    'first': <T>(v: T[]) => T;
    'map': <T1, T2>(arr: {
        [key: string]: T1;
    }[], arg: string) => T1[];
    'reverse': (v: any[]) => any[];
    'sort': <T>(v: T[], arg: (lhs: T, rhs: T) => number) => T[];
    'size': (v: string | any[]) => number;
    'concat': <T1, T2>(v: T1[], arg: T2 | T2[]) => (T1 | T2)[];
    'slice': <T>(v: T[], begin: number, length: number) => T[];
    'uniq': <T>(arr: T[]) => T[];
    'default': <T1, T2>(v: T1, arg: T2) => T1 | T2;
    'date': (v: string | Date, arg: string) => string | Date;
    'url_decode': (x: string) => string;
    'url_encode': (x: string) => string;
    'abs': (v: number) => number;
    'ceil': (v: number) => number;
    'divided_by': (v: number, arg: number) => number;
    'floor': (v: number) => number;
    'minus': (l: number, r: number) => string;
    'modulo': (l: number, r: number) => string;
    'round': (v: number, arg?: number) => number;
    'plus': (l: number, r: number) => string;
    'times': (v: number, arg: number) => number;
    'escape': (str: string) => string;
    'escape_once': (str: string) => string;
    'newline_to_br': (v: string) => string;
    'strip_html': (v: string) => string;
};
export default _default;