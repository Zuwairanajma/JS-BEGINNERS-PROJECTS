const box1 = document.querySelector(".box1");
const box2 = document.querySelector("box2");

function func1() {
    console.log("func1", this);

}
const func2 = () => {
    console.log("func2", this);
};

box1.addEventListener("click", func1);
box2.addEventListener("click", func2);