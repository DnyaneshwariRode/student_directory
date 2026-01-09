const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

if (menuToggle && sideMenu && closeMenu) {
  menuToggle.addEventListener("click", () => {
      sideMenu.style.transform = "translateX(0)";
  });

  closeMenu.addEventListener("click", () => {
      sideMenu.style.transform = "translateX(-250px)";
  });
}









// js for semister option

const btn = document.querySelector(".dropbtn");
const menu = document.querySelector(".dropdown-content");

btn.addEventListener("click", (event) => {
  event.stopPropagation(); // prevent closing immediately
  menu.classList.toggle("show");
});

// Close dropdown when clicking anywhere else
document.addEventListener("click", () => {
  menu.classList.remove("show");
});










// js for the cards to display
const cardContainer = document.getElementById("cardContainer");

document.querySelectorAll(".show-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-type");
        showCards(type);
    });
});

function showCards(type) {
    cardContainer.innerHTML = ""; // Clear previous cards

    let title = "";
    let count = 5;

    if (type === "books") title = "Book";
    else if (type === "assignments") title = "Assignment";
    else if (type === "notes") title = "Note";
    else title = "Item";

    for (let i = 1; i <= count; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerText = `${title} ${i}`;
        cardContainer.appendChild(card);
    }
}










// according to the user input 
let selectedSemester = null;

// JS for semester selection
const semesterLinks = document.querySelectorAll(".dropdown-content a");
semesterLinks.forEach((sem, index) => {
    sem.addEventListener("click", (event) => {
        event.preventDefault();
        selectedSemester = index + 1; // Semester 1 → value 1
        btn.innerText = `Semester ${selectedSemester}`; // show selected sem on button
        menu.classList.remove("show");
        cardContainer.innerHTML = ""; // clear cards after semester change
    });
});








// logic for cards

function showCards(type) {

    if (!selectedSemester) {
        alert("Please select a semester first!");
        return;
    }

    cardContainer.innerHTML = ""; // Clear previous cards

    let title = "";
    let count = 5;

    if (type === "books") title = "Book";
    else if (type === "assignments") title = "Assignment";
    else if (type === "notes") title = "Note";
    else if (type === "attendance") {
        title = "Attendance";
        count = 1; // ONLY ONE CARD
    } 
    else title = "Item";

    for (let i = 1; i <= count; i++) {
        const card = document.createElement("div");
        card.className = "card";
        
        if (type === "attendance") {
            card.innerText = `${title} (Sem ${selectedSemester})`;
        } else {
              card.innerHTML = `
        <i class='bx bx-book'></i>
        ${title} ${type === "attendance" ? "" : i} <br>
        <span style="font-size:14px; opacity:0.8;">Sem ${selectedSemester}</span>
        `;

        }

        cardContainer.appendChild(card);
    }
}












// logic for the files at the assignment , books , and notes option and a download and preview buttton
// ----------------------
// GOFILE LINKS MAPPING
// ----------------------
const fileLinks = {
    books: {
        1: "https://gofile.io/d/q0tK3p",
        2: "https://gofile.io/d/q0tK3p",
        3: "https://gofile.io/d/q0tK3p",
        4: "https://gofile.io/d/q0tK3p",
        5: "https://gofile.io/d/q0tK3p"
    },
    assignments: {
        1: "https://gofile.io/d/q0tK3p",
        2: "https://gofile.io/d/q0tK3p",
        3: "https://gofile.io/d/q0tK3p",
        4: "https://gofile.io/d/q0tK3p",
        5: "https://gofile.io/d/q0tK3p"
    },
    notes: {
        1: "https://gofile.io/d/q0tK3p",
        2: "https://gofile.io/d/q0tK3p",
        3: "https://gofile.io/d/q0tK3p",
        4: "https://gofile.io/d/q0tK3p",
        5: "https://gofile.io/d/q0tK3p"
    }
};



// -------------------------
// UPDATED CARD GENERATOR
// -------------------------
function showCards(type) {

    if (!selectedSemester) {
        alert("Please select a semester first!");
        return;
    }

    cardContainer.innerHTML = "";

    let title = "";
    let count = 5;

    if (type === "books") title = "Book";
    else if (type === "assignments") title = "Assignment";
    else if (type === "notes") title = "Note";
    else if (type === "attendance") {
        title = "Attendance";
        count = 1;
    } 
    else title = "Item";

    for (let i = 1; i <= count; i++) {
        const card = document.createElement("div");
        card.className = "card";

        if (type === "attendance") {
            card.innerText = `${title} (Sem ${selectedSemester})`;
        } else {
            const fileUrl = fileLinks[type]?.[i] || "#";

            card.innerHTML = `
                <i class='bx bx-file'></i>
                <h3>${title} ${i}</h3>
                <p>Semester ${selectedSemester}</p>

                <div class="btn-group">
                    <a class="preview-btn" href="${fileUrl}" target="_blank">Preview</a>
                    <a class="download-btn" href="${fileUrl}" download>Download</a>
                </div>
            `;
        }

        cardContainer.appendChild(card);
    }
}























document.querySelector(".close-note").onclick = () => {
    document.getElementById("notificationBar").style.display = "none";
};







function openPage(page) {
    window.location.href = page;
}






// Reusable navigation
function openPage(page) {
    window.location.href = page;
}







// ==========================
// DARK MODE TOGGLE (SINGLE SOURCE)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const darkToggle = document.getElementById("darkToggle");

    if (!darkToggle) return;

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
        darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
    
});










