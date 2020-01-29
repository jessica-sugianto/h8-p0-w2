// Melakukan looping menggunakan WHILE

var count = 0
console.log('LOOPING PERTAMA')
while(count < 20){
    count += 2
    console.log(count + ' - I love coding')
}
console.log('LOOPING KEDUA')
while(count >= 2){
    console.log(count + ' - I will become fulllstack developer')
    count -= 2
}

 // Melakukan looping menggunakan FOR

console.log('LOOPING PERTAMA')
for( count = 1; count <= 20; count++){
    console.log(count + ' - I love coding')
}
console.log('LOOPING KEDUA')
for( count = 20; count > 0; count--){
    console.log(count + ' - I will become fulllstack developer')
}

// Angka ganjil dan genap

for(count = 1; count <= 100; count++){
    if(count % 2 == 0){
        console.log("GENAP")
    }else{
        console.log("GANJIL")
    }
}

for(count = 1; count <= 100; count += 2){
    if(count % 3 == 0){
        console.log(count + " kelipatan 3")
    }
}

for(count = 1; count <= 100; count += 5){
    if(count % 6 == 0){
        console.log(count + " kelipatan 6")
    }
}

for(count = 1; count <= 100; count += 9){
    if(count % 10 == 0){
        console.log(count + " kelipatan 10")
    }
}