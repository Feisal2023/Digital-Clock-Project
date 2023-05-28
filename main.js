// // selecting elements from dom or pulling elements from dom
// const time = document.querySelector("#time");
// const date = document.querySelector("#date");
// setInterval( () => {
// today()
// }, 1000 )

// function today() {
//   let today = new Date();
//   let monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
//   let daysNames = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  
//   let currentTime = `${today.getHours() < 9 ? '0' + today.getHours() : today.getHours()} : ${today.getMinutes()  < 9 ? '0' + today.getMinutes() : today.getMinutes()} : ${today.getSeconds()  < 9 ? '0' + today.getSeconds() : today.getSeconds()} ${today.checkAMPM() <= 12 'AM'  : 'PM'}`;
//   let currentDate = `${daysNames[today.getDay() + 6]} , ${today.getDate()} ${monthsNames[today.getMonth()]} ${today.getFullYear()}`;
  
//   time.innerHTML = currentTime;
//   date.innerHTML = currentDate;
// }

const time = document.querySelector("#time");
const date = document.querySelector("#date");
setInterval(() => {
  today();
}, 1000);

function today() {
  let today = new Date();
  let monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let daysNames = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  let hours = today.getHours();
  let period = hours >= 12 ? 'PM' : 'AM';
  let displayHours = hours % 12 || 12; // Convert to 12-hour format

  let currentTime = `${displayHours < 10 ? '0' + displayHours : displayHours} : ${today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()} : ${today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds()} ${period}`;
  let currentDate = `${daysNames[today.getDay() +6]} , ${today.getDate()} ${monthsNames[today.getMonth()]} ${today.getFullYear()}`;

  time.innerHTML = currentTime;
  date.innerHTML = currentDate;
}
