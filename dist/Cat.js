var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Cat_name, _Cat_age, _Cat_favoriteFood, _Cat_namesHistory, _Cat_speakCount;
class Cat {
    constructor(initialName = undefined) {
        _Cat_name.set(this, void 0);
        _Cat_age.set(this, void 0);
        _Cat_favoriteFood.set(this, void 0);
        _Cat_namesHistory.set(this, void 0);
        _Cat_speakCount.set(this, void 0);
        __classPrivateFieldSet(this, _Cat_age, Math.floor(Math.random() * 6) + 5, "f"); // random between 5 and 10
        __classPrivateFieldSet(this, _Cat_name, initialName, "f");
        __classPrivateFieldSet(this, _Cat_favoriteFood, null, "f");
        __classPrivateFieldSet(this, _Cat_namesHistory, [], "f");
        if (initialName !== undefined)
            __classPrivateFieldGet(this, _Cat_namesHistory, "f").push(initialName);
        __classPrivateFieldSet(this, _Cat_speakCount, 0, "f");
    }
    getName() {
        return __classPrivateFieldGet(this, _Cat_name, "f") ? __classPrivateFieldGet(this, _Cat_name, "f") : "";
    }
    getAge() {
        return __classPrivateFieldGet(this, _Cat_age, "f");
    }
    getFavoriteFood() {
        return __classPrivateFieldGet(this, _Cat_favoriteFood, "f");
    }
    setName(newName) {
        if (newName !== __classPrivateFieldGet(this, _Cat_name, "f")) { // only if name changed
            __classPrivateFieldSet(this, _Cat_name, newName, "f");
            __classPrivateFieldGet(this, _Cat_namesHistory, "f").push(newName);
        }
    }
    getNames() {
        return [...__classPrivateFieldGet(this, _Cat_namesHistory, "f")];
    }
    getAverageNameLength() {
        if (__classPrivateFieldGet(this, _Cat_namesHistory, "f").length === 0)
            return 0;
        const totalLength = __classPrivateFieldGet(this, _Cat_namesHistory, "f").reduce((acc, name) => acc + name.length, 0);
        return totalLength / __classPrivateFieldGet(this, _Cat_namesHistory, "f").length;
    }
    speak(sound) {
        var _a, _b;
        __classPrivateFieldSet(this, _Cat_speakCount, (_a = __classPrivateFieldGet(this, _Cat_speakCount, "f"), _a++, _a), "f");
        if (!sound) {
            console.log('meow');
        }
        else {
            console.log(sound);
        }
        if (__classPrivateFieldGet(this, _Cat_speakCount, "f") % 5 === 0) {
            __classPrivateFieldSet(this, _Cat_age, (_b = __classPrivateFieldGet(this, _Cat_age, "f"), _b++, _b), "f");
            console.log(sound);
        }
    }
    setAge(newAge) {
        __classPrivateFieldSet(this, _Cat_age, newAge, "f");
    }
    setFavoriteFood(newFavoriteFood) {
        __classPrivateFieldSet(this, _Cat_favoriteFood, newFavoriteFood, "f");
    }
}
_Cat_name = new WeakMap(), _Cat_age = new WeakMap(), _Cat_favoriteFood = new WeakMap(), _Cat_namesHistory = new WeakMap(), _Cat_speakCount = new WeakMap();
export default Cat;
