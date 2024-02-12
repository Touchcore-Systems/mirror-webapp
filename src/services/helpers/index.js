export const addtoLocalstorage = function (key,value) {
    localStorage.setItem(key, value)
}


export const getfromLocalstorage = (key) => {
    const storedValue = localStorage.getItem(key);
    // return storedValue ? JSON.parse(storedValue) : null;
    return storedValue ? storedValue : null;
};


export const removeFromLocalstorage = function (key) {
    localStorage.removeItem(key)
}

export const clearLocalStorage = function () {
    localStorage.clear()
}

