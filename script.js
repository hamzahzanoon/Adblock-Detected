const detect = document.querySelector("#detect");
const wrapper = document.querySelector(".wrapper");
const button = wrapper.querySelector("button");

let adClasses = ["sd" ,"hsd" ,"shjd" ,"gffhsd" ,"fhhsd" ,"ddffsd" ,"ffvfssd" ,"trhjsd" ,"nmjgsd" ,"zxsasd"];

for(let item of adClasses) {
    detect.classList.add(item);
}

let getProperty = window.getComputedStyle(detect).getPropertyValue("display");


button.addEventListener("click" , () => {
    getProperty == "none" ? wrapper.classList.add(".show"): wrapper.classList.remove(".show");
});