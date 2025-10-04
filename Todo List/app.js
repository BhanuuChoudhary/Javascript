let todo = [];

let req = prompt("Please Enter your Request");
console.log(req);

while(true)
{
    if(req == "Quit")
    {

        console.log("Quiting the List");
        break;
    }
      
    if(req == "List"){
    console.log("----------------------");
    for(let i=0 ; i<todo.length ;i++)
    {
        console.log(i , todo[i]);
    }
     console.log("----------------------");
    }
  
    else if(req == "Add")
    {
    let task = prompt("Please Enter Your Task You want to add");
    todo.push(task);
    console.log("Task Added");
    console.log(task)
    }

    else if(req == "Delete")
    {
        let idx = prompt("Please enter the task Index");
        todo.splice(idx , 1);
        console.log("Task Deleted");
    }
    else{
console.log("Wrong request");
    }
req = prompt("Please Enter your Request");

  
}