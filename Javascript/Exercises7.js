// Menyusun barisan bintang

for( var count = 0; count < 5; count++){
    console.log("*")
}

// Menyusun barisan bintang dengan nested looping

for(count = 0; count < 5; count++){
    var temp = ''
    for(var i = 0; i < 5; i++){
        temp += '*'
    }
    console.log(temp)
}

// Menyusun barisan tangga bintang dengan nested looping

for(count = 0; count < 5; count++){
    var temp = ''
    for(var i = 0; i <= count; i++){
        if(count <= 5){
            temp += '*'
        }
    }
    console.log(temp)
}