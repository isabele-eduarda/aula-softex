"use strict";
//criando uma classe chamada Animal
class Animal {
    falar() {
        return `O animal faz som`;
    }
}
//criando as classes cachorro e gato e que herdam de Animal
class Cachorro extends Animal {
    falar() {
        return `au au`;
    }
}
class Gato extends Animal {
    falar() {
        return `meow meow`;
    }
}
//criando uma const animais e 
const animais = [new Cachorro(), new Gato, new Animal()];
animais.forEach((animal, i) => {
    console.log(`Animal ${i + 1}: ${animal.falar()}`);
});
//{}``=>
