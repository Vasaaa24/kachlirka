function handleScrollAnimations() {
  const elements = document.querySelectorAll("[data-animate]");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimations);
window.addEventListener("load", handleScrollAnimations);

const USERNAME = "admin";
const PASSWORD = "kachlirka8fg3";

let deleteIndex = null;

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === USERNAME && password === PASSWORD) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-section").style.display = "block";
    loadReservations();
  } else {
    alert("Neplatné uživatelské jméno nebo heslo!");
  }
}

function loadReservations() {
  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  const tableBody = document.getElementById("reservation-table-body");

  tableBody.innerHTML = "";

  reservations.forEach((reservation, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${reservation.type}</td>
            <td>${reservation.name}</td>
            <td>${reservation.email}</td>
            <td>${reservation.idNumber}</td>
            <td>${reservation.info}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="showConfirmModal(${index})">Odstranit</button>
            </td>
        `;
    tableBody.appendChild(row);
  });
}

function showConfirmModal(index) {
  deleteIndex = index;
  const modal = new bootstrap.Modal(
    document.getElementById("confirmDeleteModal")
  );
  modal.show();
}

function deleteReservation() {
  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  if (deleteIndex !== null) {
    reservations.splice(deleteIndex, 1);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    loadReservations();
  }
  deleteIndex = null;
}

document.getElementById("confirmDeleteButton").addEventListener("click", () => {
  deleteReservation();
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("confirmDeleteModal")
  );
  modal.hide();
});

document.getElementById("login-form").addEventListener("submit", handleLogin);
