const dayInput = document.getElementById("day");
let daysOfWeek;
let dayPicked;
let volunteerSlots;
let firstSlot;

function addVolunteer(day, userName) {
  dayInput.classList.remove("error");
  document.getElementById("error").innerHTML = "";
  daysOfWeek = document.getElementById("daysOfWeek")
  .children; // store the children of the #daysOfWeek div
  volunteerSlots = daysOfWeek;
  dayPicked = volunteerSlots[day].children;
  volunteerSlots = dayPicked[1];
  firstSlot = volunteerSlots.firstElementChild;
  if (firstSlot.innerHTML == "open") {
    firstSlot.innerHTML = userName;
  } else if (firstSlot.nextElementSibling.innerHTML == "open") {
    firstSlot.nextElementSibling.innerHTML = userName;
  } else {
    dayInput.classList.add("error");
    document.getElementById("error").innerHTML = "There is no open place on that day";
    
  }
}