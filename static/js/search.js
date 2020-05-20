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

    var x = document.querySelector('#dropdownMenuButton'); 
    var y = document.querySelector('#dropdownMenuButton1');
    if(x.textContent == "Distrito" || y.textContent == "Concelho"){
        $("#alertSL").css("display", "");
    }
    else{
        $("#alertSL").css("display", "none");
        window.location.href = 'results_bylocation.html?local=' + $("#dropdownMenuButton").text() +  $("#dropdownMenuButton1").text()
    }
    
});

$("#search_button1").click(function(){
    if($("#input_text").val() == ""){
        $("#alertSN").css("display", "");
    }else{
        $("#alertSN").css("display", "none");
        window.location.href = 'results_byname.html?name=' + $("#input_text").val()
    }

    
});

$("#homeButton").click(function(){
    window.location.href = 'index.html'
});

$('#input_text').keypress(function (e) {
    var key = e.which;
    if(key == 13)
     {
       $('#search_button1').click();
     }
}); 