let lang = "en";

function toggleLang() {
  lang = lang === "en" ? "fr" : "en";
  document.getElementById("lang-btn").textContent =
    lang === "en" ? "🌐 FR" : "🌐 EN";
  document.querySelectorAll(".t").forEach((el) => {
    const val = el.getAttribute("data-" + lang);
    if (val) el.innerHTML = val;
  });
}

function updateClock() {
  const n = new Date();
  document.getElementById("clock").textContent =
    String(n.getHours()).padStart(2, "0") +
    ":" +
    String(n.getMinutes()).padStart(2, "0");
}
updateClock();
setInterval(updateClock, 1000);

function openWindow(id) {
  document.querySelectorAll(".window").forEach((w) => (w.style.zIndex = 10));
  const w = document.getElementById(id);
  w.style.display = "block";
  w.style.zIndex = 100;
}

function maximizeWindow(id){
  const w = document.getElementById(id);
  w.style.width = "50%" ; 
  w.style.height = "80%";
}

function minimizeWindow(id){
  const w = document.getElementById(id);
  w.style.width = "500px"; 
  w.style.height = "auto";
}

function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}

let drag = null,
  sx,
  sy,
  ox,
  oy;
function dragStart(e, id) {
  drag = document.getElementById(id);
  sx = e.clientX;
  sy = e.clientY;
  const r = drag.getBoundingClientRect();
  ox = r.left;
  oy = r.top;
  drag.style.position = "fixed";
  drag.style.left = ox + "px";
  drag.style.top = oy + "px";
  document.querySelectorAll(".window").forEach((w) => (w.style.zIndex = 10));
  drag.style.zIndex = 200;
  e.preventDefault();
}
document.addEventListener("mousemove", (e) => {
  if (!drag) return;
  drag.style.left = ox + e.clientX - sx + "px";
  drag.style.top = oy + e.clientY - sy + "px";
});
document.addEventListener("mouseup", () => (drag = null));
