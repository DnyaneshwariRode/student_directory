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
