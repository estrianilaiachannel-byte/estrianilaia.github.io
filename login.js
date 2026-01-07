function login(){
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if(u === "estri" && p === "12345"){
    localStorage.setItem("login", true);
    window.location = "admin.html";
  } else {
    alert("Login gagal");
  }
}
