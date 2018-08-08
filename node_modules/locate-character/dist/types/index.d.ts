export interface Options {
    offsetLine?: number;
    offsetColumn?: number;
    startIndex?: number;
}
export interface Location {
    line: number;
    column: number;
    character: number;
}
export declare function getLocator(source: string, options?: Options): {
    (search: string, startIndex?: number): Location;
    (search: number): Location;
};
declare function locate(source: string, search: string, options?: Options): Location;
declare function locate(source: string, search: number, options?: Options): Location;
export { locate };
