String.prototype.yell = function () {
    return `${this.toUpperCase()}!!!`;
}

// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function() {
//     const {r,g,b} = this;
//     return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex= function() {
//     const {r,g,b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
// }

// const newColor = new Color(30,40,50);

class Color {
    constructor(r,g,b,name){
        this.r = r;
        this.b = b;
        this.g = g;
        this.name = name;
    }
    innerRGB(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`; 
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    hex() {
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);  
    }
}

class Pet {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor(name,age,liveLeft=10){
        super(name.age);
        this.liveLeft = liveLeft;
    }
    meow() {
        return "MEOWWW";
    }
}

class Dog extends Pet {
    bark() {
        return "WOOOF";
    }
    eat(){
        return `${this.name} scarfs his food`;
    }
}