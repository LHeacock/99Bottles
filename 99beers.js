function bottleCount(name){


var word = "bottles";
var count = 99;
while (count > 0) {
    console.log(name + " " + count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 1) {
        console.log(count + " " + word + " of beer on the wall.");
    }else if(count == 1){
        console.log(count + " " + "bottles of TrimTab Raspberry on the wall")
    }  
    else {
        console.log("No more " + word + " of beer on the wall.");
    }
}
}

const friendName = ["Sagan: ", "Jane: ", "Cello: ", "Jade: ", "Ham: "]
friendName[1]

friendName.forEach(name => bottleCount(name))