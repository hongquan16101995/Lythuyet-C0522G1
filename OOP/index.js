//cách 2: dùng ES6, từ khóa class và constructor
class Human {
    name
    weight
    height

    constructor(name, weight, height) {
        this.name = name
        this.weight = weight
        this.height = height
    }

    eat() {
        console.log(this.name + " có thể ăn")
    }

    drink() {
        console.log(this.name + " có thể uống")
    }
}

//khởi tạo đối tương từ class Human
let human1 = new Human("Hiếu", 70, 1.7)
//cách gọi phương thức và thuộc tính của đối tượng
human1.eat()
human1.drink()
console.log(human1.name)
