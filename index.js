/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string){
  displayMessage(string);
};

function displayMessage(string) {
  let nowTime = string.split(':');
  let nowHour = parseInt(nowTime[0]);
  if (number < 12) {
    return "Good Morning";
  } else if ( number > 12 && number < 17) {
    return "Good Afternoon"
  } else {
    return "Good Night"
  };
};
