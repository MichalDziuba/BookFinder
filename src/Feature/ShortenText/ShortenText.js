//function for make book title shorter
export const shortenText = (text) => {
    const limit = 80;
    let result;
    if (text.length > limit) {
        result = text.slice(0, limit) + "...";
    }
    else {
        result = text;
    }
    return result;
}