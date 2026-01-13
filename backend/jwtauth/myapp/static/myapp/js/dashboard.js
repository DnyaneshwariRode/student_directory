const token = localStorage.getItem("access");

// No token → go to login
if (!token) {
    window.location.href = "/login/";
}

// Call dashboard API
fetch("/api/dashboard/", {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
})
.then(response => {
    if (response.status === 401) {
        localStorage.clear();
        window.location.href = "/login/";
    }
    return response.json();
})
.then(data => {
    document.getElementById("username").innerText =
        data.user.username;

    console.log(data.message);
})
.catch(err => {
    console.error(err);
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "/login/";
});













let totalLectures = 0;
let presentLectures = 0;
let absentLectures = 0;

function updateAttendanceUI() {
    document.getElementById("totalLectures").innerText = totalLectures;
    document.getElementById("presentLectures").innerText = presentLectures;
    document.getElementById("absentLectures").innerText = absentLectures;

    let percentage = totalLectures === 0
        ? 0
        : ((presentLectures / totalLectures) * 100).toFixed(2);

    document.getElementById("attendancePercent").innerText = percentage + "%";
}

function markPresent() {
    totalLectures++;
    presentLectures++;
    updateAttendanceUI();
}

function markAbsent() {
    totalLectures++;
    absentLectures++;
    updateAttendanceUI();
}

function resetAttendance() {
    totalLectures = 0;
    presentLectures = 0;
    absentLectures = 0;
    updateAttendanceUI();
}






/* ===============================
   ROLE-BASED ACCESS CONTROL
================================ */
const role = localStorage.getItem("role");

if (role !== "teacher") {
  alert("Access Denied: Teachers only");
  window.location.href = "/login.html"; // change if needed
}

/* ===============================
   HEATMAP LOGIC
================================ */
const heatmap = document.getElementById("heatmap");
const monthsDiv = document.getElementById("months");
const DAYS = 365;

let attendance = JSON.parse(localStorage.getItem("attendance")) || {};

function dateKey(date) {
  return date.toISOString().split("T")[0];
}

function renderMonths() {
  monthsDiv.innerHTML = "";
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  for (let i = 0; i < 12; i++) {
    const span = document.createElement("span");
    span.textContent = monthNames[(new Date().getMonth() - i + 12) % 12];
    monthsDiv.appendChild(span);
  }
}

function renderHeatmap() {
  heatmap.innerHTML = "";

  for (let i = DAYS; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const key = dateKey(date);
    const count = attendance[key] || 0;

    const day = document.createElement("div");
    day.classList.add("day");

    if (count > 0) {
      day.classList.add(`l${Math.min(count, 4)}`);
    }

    day.title = `${key} | Attendance: ${count}`;

    day.addEventListener("click", () => {
      attendance[key] = (attendance[key] || 0) + 1;
      localStorage.setItem("attendance", JSON.stringify(attendance));
      renderHeatmap();
    });

    heatmap.appendChild(day);
  }
}

renderMonths();
renderHeatmap();
