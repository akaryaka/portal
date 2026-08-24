// export const getUsers = () => {
//   fetch('http://localhost:3002/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

export const getUsers = await fetch('http://localhost:3002/users', {
  method: 'GET',
  mode: "cors",
  cache: "default",

});