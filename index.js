// Code your solutions in this file
for(let age= 30; age<40; age++){
    console.log `I'm ${age} years old.Happy birthday to me!`
}

const gifts=["teddy bear", "drone", "doll"]

function wrapGifts(gifts){
    for(let i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        
    }
    return gifts
}

wrapGifts(gifts)


function writeCards(array,eventName){
    const new1=[];
    for(let spy=0; spy< array.length; spy++){
    new1.push(`Thank you, ${array[spy]}, for the wonderful ${eventName} gift!`);
    }
    return new1
}
writeCards(["Guadalupe", "Ollie", "Aki"],"surprise")


function countDown(number){
    while(number>=0){
      console.log(number--)
    }
}