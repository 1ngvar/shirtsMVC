const greet = (name = "Neo") => console.log("Wake up, " + name);  greet()


// Display a randomized quote on button click  –  meddling with querySelector
const sage = document.querySelector('img[src*="mike"]')
const dialogBox = document.querySelector('.section .wrapper .button a')

const displayRandomizedQuote = () => dialogBox.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
// sage.onclick =  displayRandomizedQuote



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = (iterable) => {
    let set = new Set(iterable)
    console.log(set)
    for (let i of set) {
        // return i
    }
}

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"





// log table
function Object (multiplierOne, multiplierTen, multiplier100) {
    this.One = Math.random() * multiplierOne
    this.Ten = Math.floor(Math.random() * 10) * multiplierTen
    this.Hundred = Math.floor(Math.random() * 10) * multiplier100
}

obj1 = new Object(1, 1, 1)
obj2 = new Object(3, 10, 42)


// console.table(obj1)
// console.table(obj2)



// Write your own bind() method
const bind = function (context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}




// Closure example
function multiplyByThousand(n){ return function() {console.log(1000 * n)}
}
multiplyByThousand(42)

const closureFunc = multiplyByThousand(42)
// closureFunc()




// self vs this
const a = {
    log: function () {
        self = this
    function level_2() {
        console.log(self);

        function level_3() {
            console.log(self);

        } level_3()
    } level_2()
  }
};
// a.log()



// Declarations, Arrays & other garbage
let quotes = [
    `Запомните, твари – я не сломаюсь <br> ̿ ̿ ̿ ̿ ̿'̿̿'\\̵͇̿̿\\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿`,
    `Лев – король джунглей, <br> но волк в цирке не выступает`
]
