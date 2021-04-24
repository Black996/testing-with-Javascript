module.exports = {
    forEach(arr, fn) {
        for (let item of arr) {
            fn(item);
        }
    }
};