/* Module 1, Week 5: Pair Programming - Word Search
Partners: Gloria Cheung (Github: Gloria-Cheung) & Milton Vandol Goh (GitHub: Vandal19) */
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));

    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    const verticalJoin = [];
    for (let i = 0; i <= letters.length - 1; i++) {
        let newStr = "";
        for (let j = 0; j <= letters[i].length; j++) {
            newStr += letters[j][i];
        }
        verticalJoin.push(newStr);
    }

    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    
    return false;
};


module.exports = wordSearch;
