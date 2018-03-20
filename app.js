var numToMatch = 7;

for(var i = 1; i <= 100; i = i + 1){
    if(i % numToMatch === 0){
        console.log("MATCH!");
    } else {
        console.log(i);
    }
}