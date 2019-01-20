function balanced(str) {
    if (!str || !str.length || (str.length % 2) !== 0) {
        return false;
    }

    const counts = {};
    for (let i = 0; i < str.length; i++) {
        const chr = str[i];
        if (chr in counts) {
            counts[chr]++;
        } else {
            counts[chr] = 1;
        }
    }
    return Object.values(counts).some((val, i, arr) => {
        return !(i > 0 && val !== arr[i - 1]);
    });
}

console.log(balanced("xxxyyy"));
console.log(balanced("yyyxxx"));
console.log(balanced("xxxyyyy"));
console.log(balanced("yyxyxxyxxyyyyxxxyxyx"));
console.log(balanced("xyxxxxyyyxyxxyxxyy"));
console.log(balanced(""));
console.log(balanced("x"));
