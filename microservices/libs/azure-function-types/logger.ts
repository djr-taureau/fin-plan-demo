export interface ILogger {
    (...message: Array<any>): void;
    error(...message: Array<any>): void;
    warn(...message: Array<any>): void;
    info(...message: Array<any>): void;
    verbose(...message: Array<any>): void;
    metric(...message: Array<any>): void;
}