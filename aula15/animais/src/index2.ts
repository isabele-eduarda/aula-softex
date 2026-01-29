//criando uma classe chamada Animal
class Animal{
    falar(): string {   //criando um metodo classificado como string
        return `O animal faz som`;
    }
}

//criando as classes cachorro e gato e que herdam de Animal
class Cachorro extends Animal {
    falar():string {
        return `au au`;
    }
} 

class Gato extends Animal {
    falar():string {
        return `meow meow`;    
    }
}

//criando uma const animais e 
const animais: Animal[] = [new Cachorro(),new Gato,new Animal()]


animais.forEach ((animal,i)=>{
    console.log (`Animal ${i+1}: ${animal.falar()}`);
});

//{}``=>