$("#aveiro").click(function(){
    $("#dropdownMenuButton").text("Aveiro");
});

$("#Agueda").click(function(){
    $("#dropdownMenuButton1").text("Agueda");
});

$("#Albergaria-a-Velha").click(function(){
    $("#dropdownMenuButton1").text("Albergaria-a-Velha");
});
$("#Anadia").click(function(){
    $("#dropdownMenuButton1").text("Anadia");
});

$("#Arouca").click(function(){
    $("#dropdownMenuButton1").text("Arouca");
});

$("#Aveiro").click(function(){
    $("#dropdownMenuButton1").text("Aveiro");
});

$("#CastelodePaiva").click(function(){
    $("#dropdownMenuButton1").text("Castelo de Paiva");
});

$("#Espinho").click(function(){
    $("#dropdownMenuButton1").text("Espinho");
});

$("#Estarreja").click(function(){
    $("#dropdownMenuButton1").text("Estarreja");
});

$("#Ilhavo").click(function(){
    $("#dropdownMenuButton1").text("Ilhavo");
});
$("#Mealhada").click(function(){
    $("#dropdownMenuButton1").text("Mealhada");
});

$("#Murtosa").click(function(){
    $("#dropdownMenuButton1").text("Murtosa");
});
$("#OliveiradeAzemeis").click(function(){
    $("#dropdownMenuButton1").text("Oliveira de Azemeis");
});

$("#OliveiradoBairro").click(function(){
    $("#dropdownMenuButton1").text("Oliveira do Bairro");
});
$("#Ovar").click(function(){
    $("#dropdownMenuButton1").text("Ovar");
});
$("#SantaMariadaFeira").click(function(){
    $("#dropdownMenuButton1").text("Santa Maria da Feira");
});
$("#SãoJoãodaMadeira").click(function(){
    $("#dropdownMenuButton1").text("São João da Madeira");
});
$("#SeverdoVouga").click(function(){
    $("#dropdownMenuButton1").text("Sever do Vouga");
});
$("#Vagos").click(function(){
    $("#dropdownMenuButton1").text("Vagos");
});
$("#ValedeCambra").click(function(){
    $("#dropdownMenuButton1").text("Vale de Cambra");
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