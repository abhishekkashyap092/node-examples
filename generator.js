

function* doubler() {
        x = 1;
        yield 1;
        for(;;) {
                x = x+x;
                yield x;
        }

}

f = doubler();
console.log(f.next()); // 1
console.log(f.next()); // 2
console.log(f.next()); // 8
console.log(f.next()); // 4
console.log(f.next()); // 16
console.log(f.next()); // 32
