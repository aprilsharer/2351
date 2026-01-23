let globalCounter = 100;
let calculationResult = globalCounter * 2 + 15;

function demonstrateScopes() {
    console.log("Starting scope demonstration");
    console.log(globalCounter);
    
    let mathExample = globalCounter / 5;
    console.log(mathExample);
    
    if (true) {
        let blockLevel = 42;
        console.log(blockLevel);
    }
    
    let userName = "April";
    console.log(userName);
    
    const userProfile = {
        name: "May",
        age: 34node index.js,
        city: "Austin"
    };
    
    console.log(userProfile);
    console.log(userProfile.name);
}

demonstrateScopes();

console.log("Global variable accessible here too:")