// задача №1

function parseCount(value) {
    const number = Number.parseInt(value);
    if (number) {
        return number;
    }
    throw new Error("Невалидное значение");
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (err) {
        return err;
    }
}


// задача №2

class Triangle {
    constructor(a, b, c) {
        if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c
    }

    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}