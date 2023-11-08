/*
1) javascript For in loop

Write a JavaScript function named printObjectProperties that takes an object as an argument and uses the for...in loop to print all the properties and their values in the following format: "property: value". If the object is empty, print "Object is empty".
*/ 

// starting javascript code here
function printObjectProperties(obj) {
    let output = document.getElementById('output');
    output.value = '';

    if (Object.keys(obj).length === 0) {
        output.value = 'Object is empty';
        return;
    }

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            output.value += prop + ': ' + obj[prop] + '\n';
        }
    }
}

document.getElementById('printBtn').addEventListener('click', function() {
    const exampleObject = {
        name: 'John',
        age: 30,
        city: 'New York'
    };
    
    printObjectProperties(exampleObject);
});

