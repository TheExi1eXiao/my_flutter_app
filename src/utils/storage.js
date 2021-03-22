export const getSto = (key) => {
    let data;
    if (localStorage.getItem(key) != undefined && localStorage.getItem(key) != null) {
        data = JSON.parse(localStorage.getItem(key)).data
    }
    return data;
}

export const setSto = (key, value) => {
    let data = {
        data: value,
        time: null,
    }
    localStorage.setItem(key, JSON.stringify(data));
}

export const removeSto = (key) => {
    localStorage.removeItem(key)
}