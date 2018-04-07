function rotateArray(arr){
    let currentElement;
    let rotation = Number(arr.pop())
// I make the rotation to the number left after %(modulo) to arr.length as there is no need to rotate
// the same array 100 times just the amount left when / to rotation number
    for (let i =0; i< rotation % arr.length; i++){
        currentElement = arr.pop()
        arr.unshift(currentElement)
    }
    console.log(arr.join(' ')) 
}

rotateArray([1,2,3,4,2])

// second version 

function rotateArray(input) {
    let rotations = Number(input.pop());
    rotations %= input.length;

    for(let i=0; i<rotations; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

rotateArray([1,2,3,4,2])
