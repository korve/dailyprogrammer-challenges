function balanced(str) {
    if (!str || !str.length || (str.length % 2) !== 0) {
        return false;
    }

    const counts = {};
    str.split("").forEach((chr) => (chr in counts) ? counts[chr]++ : counts[chr] = 1);
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
