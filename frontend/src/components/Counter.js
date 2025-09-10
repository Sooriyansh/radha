<form id="signupForm">
  <input type="text" id="name" placeholder="Enter name" required />
  <input type="text" id="username" placeholder="Enter username" required />
  <button type="submit">Submit</button>
</form>

<div>
  <h1 id="counterDisplay">0. Shri Radha 🌸</h1>
  <div id="malaCount">MALA COUNT: 0</div>
  <button id="countButton">CLICK ME</button>
</div>

<script>
let counter = 0;
let mala = 0;

document.getElementById("countButton").addEventListener("click", function() {
  counter++;
  if(counter % 108 === 0) {
    mala++;
    document.getElementById("malaCount").innerText = `MALA COUNT: ${mala}`;
  }
  document.getElementById("counterDisplay").innerText = `${counter}. Shri Radha 🌸`;
});

document.getElementById("signupForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;

  const res = await fetch("https://radha-d10l.onrender.com/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, username })
  });

  const result = await res.json();
  console.log(result);
  alert("Form submitted!");
});
</script>
