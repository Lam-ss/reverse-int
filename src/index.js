module.exports = function reverse (n) {
    let ss = ""

    ss = (Math.abs(n)).toString().split("").reverse().join("");

    return(ss);

}
