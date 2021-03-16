console.log("Hey")
const apis = async ()=>{
  fetch("https://jsonplaceholder.typicode.com/users").then(resp=>resp.json())
}

window.onload =()=>{

}