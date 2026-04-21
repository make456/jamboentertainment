// ================= EVENTS DATA =================
const events = [
  "May 16 - Columbia, SC",
  "June 5 - Cleveland, Ohio",
  "June 12 - Kansas City, Kansas",
  "June 20 - St. Louis, Missouri",
  "July 1 - Tennessee",
  "July 10 - Paris"
];

// ================= LOAD EVENTS =================
const eventList = document.getElementById("eventList");

if (eventList) {
  events.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-card";
    div.textContent = event;
    eventList.appendChild(div);
  });
}

// ================= BOOK BUTTON =================
function bookNow() {
  alert("Booking system coming soon 🔥");
}

// ================= FORM SUBMIT =================
const form = document.getElementById("bookingForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Booking request sent!");
  });
}
function bookNow() {
  window.location.href = "book.html";
}