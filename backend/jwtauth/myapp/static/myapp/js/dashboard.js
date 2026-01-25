// dashboard.js
const token = localStorage.getItem("access");

if (!token) {
    window.location.href = "/login/";
} else {
    fetch("/api/dashboard/", {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(res => {
        if (res.status === 401) window.location.href = "/login/";
        return res.json();
    })
    .then(data => {
        document.getElementById("userInfo").innerText = 
            `Welcome ${data.user.username}`;
    });
}
