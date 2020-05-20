$("#aveiro").click(function(){
    $("#dropdownMenuButton").text("Aveiro");
});

$("#cacia").click(function(){
    $("#dropdownMenuButton1").text("Cacia");
});

$("#ilhavo").click(function(){
    $("#dropdownMenuButton1").text("Ilhavo");
});

$("#search_button").click(function(){
    window.location.href = 'results_bylocation.html?local=' + $("#dropdownMenuButton").text() +  $("#dropdownMenuButton1").text()
});

$("#search_button1").click(function(){
    window.location.href = 'results_byname.html?name=' + $("#input_text").val()
});

$("#homeButton").click(function(){
    window.location.href = 'index.html'
});