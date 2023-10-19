var res = fetch("https://jsonplaceholder.typicode.com/users");
res.then((data)=>data.json()).then((value)=>bar(value))

var container = document.createElement("div");
container.className = "container"
var row = document.createElement("div");
row.className = "row"
container.append(row);

function bar(value){
    console.log(value); 
    for(var i=0; i<value.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card -primary mb-5" style="max-width: 25  rem;">
        <div class="card-body">
         <p class="card-text"> <b>Name :${value[i].name}</b></p>
         <p class="card-text"> Email :${value[i].email}</p>
         <p class="card-text"> City :${value[i].address.city}</p>
         <p class="card-text"> Street :${value[i].address.street}</p>
         <p class="card-text"> Username :${value[i].username}</p>
         <p class="card-text"> Website :${value[i].website}</p>
        </div>
        </div> 
        </div>`
}
document.body.append(container)
}
