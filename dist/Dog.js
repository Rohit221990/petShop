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
var _Dog_name, _Dog_age, _Dog_favoriteFood, _Dog_namesHistory, _Dog_barkCount;
class Dog {
    constructor(initialName = undefined) {
        _Dog_name.set(this, void 0);
        _Dog_age.set(this, void 0);
        _Dog_favoriteFood.set(this, void 0);
        _Dog_namesHistory.set(this, void 0);
        _Dog_barkCount.set(this, void 0);
        __classPrivateFieldSet(this, _Dog_age, Math.floor(Math.random() * 6) + 5, "f"); // random between 5 and 10
        __classPrivateFieldSet(this, _Dog_name, initialName, "f");
        __classPrivateFieldSet(this, _Dog_favoriteFood, null, "f");
        __classPrivateFieldSet(this, _Dog_namesHistory, [], "f");
        if (initialName)
            __classPrivateFieldGet(this, _Dog_namesHistory, "f").push(initialName);
        __classPrivateFieldSet(this, _Dog_barkCount, 0, "f");
        console.log(`Dog instance created with name: ${__classPrivateFieldGet(this, _Dog_name, "f")}, age: ${__classPrivateFieldGet(this, _Dog_age, "f")}`);
    }
    getName() {
        return __classPrivateFieldGet(this, _Dog_name, "f");
    }
    getAge() {
        return __classPrivateFieldGet(this, _Dog_age, "f");
    }
    getFavoriteFood() {
        return __classPrivateFieldGet(this, _Dog_favoriteFood, "f");
    }
    setName(newName) {
        if (newName !== __classPrivateFieldGet(this, _Dog_name, "f")) {
            __classPrivateFieldSet(this, _Dog_name, newName, "f");
            __classPrivateFieldGet(this, _Dog_namesHistory, "f").push(newName);
            console.log(`Dog name set to: ${newName}`);
        }
    }
    getNames() {
        return [...__classPrivateFieldGet(this, _Dog_namesHistory, "f")];
    }
    getAverageNameLength() {
        if (__classPrivateFieldGet(this, _Dog_namesHistory, "f").length === 0)
            return 0;
        const totalLength = __classPrivateFieldGet(this, _Dog_namesHistory, "f").reduce((acc, name) => acc + name.length, 0);
        return totalLength / __classPrivateFieldGet(this, _Dog_namesHistory, "f").length;
    }
    bark(sound) {
        var _a, _b;
        __classPrivateFieldSet(this, _Dog_barkCount, (_a = __classPrivateFieldGet(this, _Dog_barkCount, "f"), _a++, _a), "f");
        if (!sound) {
            console.log("woof");
        }
        else {
            console.log(sound);
        }
        if (__classPrivateFieldGet(this, _Dog_barkCount, "f") % 5 === 0) {
            __classPrivateFieldSet(this, _Dog_age, (_b = __classPrivateFieldGet(this, _Dog_age, "f"), _b++, _b), "f");
            console.log(`Dog's age increased to ${__classPrivateFieldGet(this, _Dog_age, "f")} after barking 5 times`);
        }
    }
    setAge(newAge) {
        __classPrivateFieldSet(this, _Dog_age, newAge, "f");
    }
    setFavoriteFood(newFavoriteFood) {
        __classPrivateFieldSet(this, _Dog_favoriteFood, newFavoriteFood, "f");
    }
}
_Dog_name = new WeakMap(), _Dog_age = new WeakMap(), _Dog_favoriteFood = new WeakMap(), _Dog_namesHistory = new WeakMap(), _Dog_barkCount = new WeakMap();
export default Dog;
