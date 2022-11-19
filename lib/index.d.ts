declare global {
    interface Console {
        _log(message?: any, ...optionalParams: any[]): void;
    }
}
export {};
