let input = prompt("What would you like to do?");
const todos = ["A","B"];
while(input !== 'quit'){
    if(input === "list"){
        console.log("***************")
        for(let i=0;i<todos.length;i++){
            console.log(`${i+1}: ${todos[i]}`);
        }
        console.log("***************")
    }else if(input === "new"){
        const newTodo = prompt("What is the new Todo?");
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list.`);
    }else if(input === "delete"){
        const index = parseInt(prompt("Enter the index to delete: "));
        if(!Number.isNaN(index)){
        const deleted = todos.splice(index-1,1);
        console.log(`${deleted} is deleted.`);
        }else{
            console.log("Unkown index.");
        }
    }
    input  = prompt("What would you like to do?");
}
console.log("Ok, the app is quited")