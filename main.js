function convertType(value) {
    const lower = value.toLowerCase();

    if (lower === "true") return true;
    if (lower === "false") return false;

    if (!isNaN(value) && value.trim() !== "") return Number(value);

    return value;
}

const input1 = prompt("1-ma'lumot kiriting:");
const input2 = prompt("2-ma'lumot kiriting:");
const input3 = prompt("3-ma'lumot kiriting:");

const val1 = convertType(input1);
const val2 = convertType(input2);
const val3 = convertType(input3);

console.log(val1, typeof val1);
console.log(val2, typeof val2);
console.log(val3, typeof val3);