let fs = require("fs/promises");
// fetch data from this API: https://jsonplaceholder.typicode.com/users parsed it that each object have only four props like id, name, username and email and write this array into users.json
//
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     let emptyArr = {};
//     for (let i = 0; i < data.length; i++) {
//       emptyArr.id = data[i].id;
//       emptyArr.name = data[i].name;
//       emptyArr.username = data[i].username;
//       emptyArr.email = data[i].email;
//       fs.appendFile("result.txt", JSON.stringify(emptyArr));
//     }
//   });









// write a random text in file then read this data and count how many words are there
//
// const lorem = "loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
// fs.writeFile('random.txt', lorem)
// fs.readFile('random.txt', 'utf-8').then(data => console.log(data.split(' ').length));









// read users json data then filter them older than 18 years and rewrite this data
//
// fetch("https://dummyjson.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     // fs.writeFile("usersData.json", JSON.stringify(data));
//     fs.readFile("usersData.json", "utf-8").then((usersData) => {
//       const ParsedData = JSON.parse(usersData);
//       console.log(ParsedData.users.filter(item => item.age < 25)); // ამ კონკრეტულ API-ში უმჯებესია 25 წელზე ნაკლები პირობა შევასრულო
//     });
//   });
