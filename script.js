
//Treba nam python scripta da se pokrene
//cmd python -m http.server
document.cookie = "name=cysecor";
document.cookie = "test=test1";

const date = new Date();

let today = date.getTime();

let expires = 2 * 24 * 60 * 60 * 1000;

date.setTime(today + expires);

let new_date = date.toUTCSring()

console.log(date.toUTCSring());


document.cookie = `login1 expires=${new_date} `;

kolacici = document.cookie;

