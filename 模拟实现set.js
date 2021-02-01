(function(global) {

    var NaNSymbol = Symbol('NaN');

    var encodeVal = function(value) {
        return value !== value ? NaNSymbol : value;
    }

    var decodeVal = function(value) {
        return (value === NaNSymbol) ? NaN : value;
    }

    var makeIterator = function(array, iterator) {
        var nextIndex = 0;

        // new MySet(new MySet()) 会调用这里
        var obj = {
            next: function() {
                return nextIndex < array.length ? { value: iterator(array[nextIndex++]), done: false } : { value: void 0, done: true };
            }
        };

        // [...MySet.keys()] 会调用这里
        obj[Symbol.iterator] = function() {
            return obj
        }

        return obj
    }

    function forOf(obj, cb) {
        let iterable, result;

        if (typeof obj[Symbol.iterator] !== "function") throw new TypeError(obj + " is not iterable");
        if (typeof cb !== "function") throw new TypeError('cb must be callable');

        iterable = obj[Symbol.iterator]();

        result = iterable.next();
        while (!result.done) {
            cb(result.value);
            result = iterable.next();
        }
    }

    function MySet(data) {
        this._values = [];
        this.size = 0;

        forOf(data, (item) => {
            this.add(item);
        })

    }

    MySet.prototype['add'] = function(value) {
        value = encodeVal(value);
        if (this._values.indexOf(value) == -1) {
            this._values.push(value);
            ++this.size;
        }
        return this;
    }

    MySet.prototype['has'] = function(value) {
        return (this._values.indexOf(encodeVal(value)) !== -1);
    }

    MySet.prototype['delete'] = function(value) {
        var idx = this._values.indexOf(encodeVal(value));
        if (idx == -1) return false;
        this._values.splice(idx, 1);
        --this.size;
        return true;
    }

    MySet.prototype['clear'] = function(value) {
        this._values = [];
        this.size = 0;
    }

    MySet.prototype['forEach'] = function(callbackFn, thisArg) {
        thisArg = thisArg || global;
        for (var i = 0; i < this._values.length; i++) {
            callbackFn.call(thisArg, this._values[i], this._values[i], this);
        }
    }

    MySet.prototype['values'] = MySet.prototype['keys'] = function() {
        return makeIterator(this._values, function(value) { return decodeVal(value); });
    }

    MySet.prototype['entries'] = function() {
        return makeIterator(this._values, function(value) { return [decodeVal(value), decodeVal(value)]; });
    }

    MySet.prototype[Symbol.iterator] = function(){
        return this.values();
    }

    MySet.prototype['forEach'] = function(callbackFn, thisArg) {
        thisArg = thisArg || global;
        var iterator = this.entries();

        forOf(iterator, (item) => {
            callbackFn.call(thisArg, item[1], item[0], this);
        })
    }

    MySet.length = 0;

    global.MySet=MySet;

})(globalThis)


let s=new MySet([1,2,3,4])
console.log(s.valueOf());

let s2=new Set([1,2,3,4]);
console.log(s2);