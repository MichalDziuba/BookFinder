//Support functions for writing and reading data from localStorage
export const saveToLocalStorage = (key, value) => {
    
    let localStorageData = JSON.parse(localStorage.getItem(key)) || [];
    const booksIds = localStorageData.map((book) => book.id)
     if (booksIds.includes(value.id)) { //if book is already in localStorage - do nothing
        return
    }
    //add new item to existing array in localStorage
    localStorageData.push(value);
    localStorage.setItem(key, JSON.stringify(localStorageData));
}
export const loadFromLocalStorage = (key) => { 
    const localStorageData = localStorage.getItem(key)
    return localStorageData
}
