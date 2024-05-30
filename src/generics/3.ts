function merge<T extends object,S extends object> (objA:T, objB:S) : T & S {
        return Object.assign({},objA, objB);
    }
    