//მოცემულია მასივი: [1, 67, 34, 56, 55, 10, 7, 30, 20]

//მასივიდან დაბეჭდეთ ისეთი რიცხვები, რომლებიც უნაშთოდ იყოფიან 5-ზე

let array = [1, 67, 34, 56, 55, 10, 7, 30, 20];
let dima = []
let dima2 = []
let dima3 = []
let i = 0;
while(i<array.length){
    if(array[i]%5==0){
        dima.push(array[i])
    }else if(array[i]%5!==0){
        dima2.push(array[i])
    }
    i++
}
console.log(dima)

for(var y=0; i<dima.length;i++){
    if(dima[i]%5==0){
        dima3.push(dima[i])
    }
}

console.log(dima3)