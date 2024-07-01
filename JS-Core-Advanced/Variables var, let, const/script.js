try {
    console.log(varVariable); // undefined
    var varVariable = "This is var";
    console.log(varVariable); 
} catch (error) {
    console.log("Error with var:", error);
}

try {
    console.log(letVariable); // ReferenceError
    let letVariable = "This is let";
    console.log(letVariable); 
} catch (error) {
    console.log("Error with let:", error);
}

try {
    console.log(constVariable); // ReferenceError
    const constVariable = "This is const";
    console.log(constVariable); 
} catch (error) {
    console.log("Error with const:", error);
}