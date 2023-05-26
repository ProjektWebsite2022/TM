document.addEventListener("visibilitychange", function() {
    if (document.hidden){
        document.title = "Please come back!";
    } else {
        document.title = "Welcome back!";
    }
});
