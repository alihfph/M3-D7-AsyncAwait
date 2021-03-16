console.log("Hey")

// container.innerHTML = ""

let users = []

let cardTemplate = (user1)=>{
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${user1.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${user1.email}</h6>
    <p class="card-text">${user1.address.street}</p>
  </div>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Info
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">${user1.name}</a>
    <a class="dropdown-item" href="#">${user1.username}</a>
    <a class="dropdown-item" href="#">${user1.email}</a>
  </div>
</div>
</div>`

}

// let dropdownTemplate = (useroptions)=>{
//   return `<div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Dropdown button
//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <a class="dropdown-item" href="#">${useroptions.name}</a>
//     <a class="dropdown-item" href="#">${useroptions.username}</a>
//     <a class="dropdown-item" href="#">${useroptions.email}</a>
//   </div>
// </div>`
// }

// const createDropdown = () => {
//   const dropdown = document.getElementById("dropdown");
//   // container.innerHTML = ""
//     dropdown.innerHTML += dropdownTemplate(users)
//   };
console.log(cardTemplate)
const createCards = () => {
  const container =document.getElementById("container");
  container.innerHTML = "";
  users.forEach((userInfo) => {
    container.innerHTML += cardTemplate(userInfo);
  });
};

window.onload =()=>{
  fetch(
    "https://jsonplaceholder.typicode.com/users"
  )
    
  .then((response) => {
      return response.json();
    })
    .then((parsedBody) => {
      users = parsedBody
  }).catch(err=>(err))
}