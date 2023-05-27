document.addEventListener("visibilitychange", function() {
    if (document.hidden){
        document.title = ":(";
    } else {
        document.title = ":D";
    }
});
