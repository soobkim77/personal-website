function collapse() {
    var collapse = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < collapse.length; i++) {
      collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
}