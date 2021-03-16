console.log("Hey")

container.innerHTML = ""


let cardTemlate = (userInfo)=>{
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${userInfo.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
}
const createCards = () => {
  const container =document.getElementById("container");
  container.innerHTML = "";
  secondimages.forEach((image) => {
    container.innerHTML += returnCardSecond(image.url);
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
      console.log(parsedBody);
  }).catch(err=>(err))
}