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
