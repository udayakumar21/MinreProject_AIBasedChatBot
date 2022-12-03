< button onclick = "toggleText()" > button < /button> <
    p id = "Myid" > Text < /p> <
    script >
    function toggleText() {
        var x = document.getElementById("Myid");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } <
    /script>