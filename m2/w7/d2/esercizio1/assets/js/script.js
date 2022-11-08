class Persona {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    ConfrontaEta(x) {
        if (this.age > x.age) {
            console.log(this.name + " è più vecchio di " + x.name);
        } else {
            console.log(x.name + " è più vecchio di " + this.name);
        }
    }
}

var p1 = new Persona('Mario', 21);
var p2 = new Persona('Simone', 18);
var p3 = new Persona('Giulia', 30);

p1.ConfrontaEta(p2);
p1.ConfrontaEta(p3);
p2.ConfrontaEta(p3);
