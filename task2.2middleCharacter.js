class MidChar {
    middle(str) {
        var x = str.length;
        if (x % 2 != 0) {
            return str.slice(x / 2, x / 2 + 1);
        }
        else {
            return str.slice(x / 2 - 1, x / 2 + 1);
        }
    }
}
let Kata = new MidChar();
document.write(Kata.middle("show"));
