// Let"s keep it simple and only add the following methods to the Map:
export default class MyMap<T> {
    private _store: {[k: string]: T};

    constructor() {
        this._store = {};
    }

    setItem(key: string, value: T): void {
        this._store[key] =  value;
    }

    getItem(key: string): T | undefined {
        if (this._store[key]) {
            return this._store[key];
        } else {
            return undefined;
        }
    }

    // should remove all key-value pairs
    clear(): void {
        this._store = {};
    }

     // should output key-value pairs
    printMap(): string {
        let res: string[] = [];
        Object.keys(this._store).forEach((key: string) => res.push(`${key} => ${this._store[key]}`));
        return res.join("\r\n");
    }
}
