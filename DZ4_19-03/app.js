// #1
const block = document.querySelector('.block');
let position = 0;
let topPosition = 0;

const move = () => {
    if (position <= 440 && topPosition === 0 ) {
        position += 20;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position >= 440 && topPosition <= 440) {
        topPosition += 20;
        block.style.top = `${topPosition}px`
        setTimeout(move, 100);
    } else if (topPosition >= 440 && position !== 0) {
        position -= 20;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position <= 0 &&  topPosition >= 0) {
        topPosition -=20;
        block.style.top = `${topPosition}px`
        setTimeout(move, 100);
    }
};
move();
// #2
let number =0;

const startNew = document.querySelector(".start")
const stopNov = document.querySelector(".stop")


startNew.addEventListener("click", () => {
     startFunction = setInterval(interval, 1000) 
     function interval() {
        number ++
        console.log(`${number} seconds later`)
    }
});

stopNov.addEventListener("click",() => {
    clearInterval(startFunction);
    console.clear()
    number = 0;
    });


// #3
const func = (number) => {
    console.log(number);
    const culck = () => {
        let i = number *8;
        console.log(i);
    };
   culck();
}
func(9);





