let options = {
    width: 1024,
    height: 1024,
    name: "screen"
};

// console.log(options.name);
// options.bool = false;
// console.log(options);
options.colors = {
    border: "black",
    bg: "red"
};
// console.log(options);
// console.log(options.colors.border);

// delete options.bool;
// console.log(options);


for(let key in options){
    console.log(key + " " + options[key]);
}
console.log(Object.keys(options.colors).length);