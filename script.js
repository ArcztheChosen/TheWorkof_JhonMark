let btnTerminal = document.getElementById("terminal");

function funcBtn() {
  let terminal = document.getElementById("colorterminal");
  terminal.style.display = terminal.style.display === "flex" ? "none" : "flex"; 

  
}

btnTerminal.addEventListener("click", funcBtn);
