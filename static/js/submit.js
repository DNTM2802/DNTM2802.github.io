$( document ).ready(function() {
    $("#moradaalert").show();
    $("#nomealert").show();
    $("#horarioalert").show();
});



$("#distrito").click(function(){
    $("#dropdownMenuButton").text("Aveiro");
});

$("#cacia").click(function(){
    $("#dropdownMenuButton1").text("Cacia");
});

$("#ilhavo").click(function(){
    $("#dropdownMenuButton1").text("Ilhavo");
});

$("#morada").change(function(){
    var moradex=$("#morada").val();
    if(moradex.length>7){
        $("#moradaalert").hide();
    }else{
        $("#moradaalert").show();
    }
});

$("#nome").change(function(){
    var moradex=$("#nome").val();
    if(moradex.length>3){
        $("#nomealert").hide();
    }else{
        $("#nomealert").show();
    }
});

$("#horario").change(function(){
    var moradex=$("#horario").val();
    if(moradex.length>=5){
        $("#horarioalert").hide();
    }else{
        $("#horarioalert").show();
    }
});

$("#submit").click(function(){
    var DistricSelected= $("#dropdownMenuButton").text().trim();
    var ConSelected=$("#dropdownMenuButton1").text().trim();
    var morada = $("#morada").val();
    var Nome = $("#nome").val();
    var categorias = new Array();
    noErrors=true;
    var count=0;
    if ($('#chk-farmacias').is(':checked')) {
        categorias.push("farmacias");
        count+=1;
    }
    if ($('#chk-hospitais').is(':checked')) {
        categorias.push("hospitais");
        count+=1;
    }
    if ($('#chk-c_saude').is(':checked')) {
        categorias.push("c_saude");
        count+=1;
    }
    if ($('#chk-clinicas').is(':checked')) {
        categorias.push("clinicas");
        count+=1;
    }
    if ($('#chk-veterinarios').is(':checked')) {
        categorias.push("veterinarios");
        count+=1;
    }
    if ($('#chk-mercados').is(':checked')) {
        categorias.push("mercados");
        count+=1;
    }
    if ($('#chk-talhos').is(':checked')) {
        categorias.push("talhos");
        count+=1;
    }
    if ($('#chk-padarias').is(':checked')) {
        categorias.push("padarias");
        count+=1;
    }
    if ($('#chk-restaurantes').is(':checked')) {
        categorias.push("restaurantes");
        count+=1;
    }
    if ($('#chk-lavandarias').is(':checked')) {
        categorias.push("lavandarias");
        count+=1;
    }
    if ($('#chk-telecomunicacoes').is(':checked')) {
        categorias.push("telecomunicacoes");
        count+=1;
    }
    if ($('#chk-combustiveis').is(':checked')) {
        categorias.push("combustiveis");
        count+=1;
    }
    if ($('#chk-gas').is(':checked')) {
        categorias.push("gas");
        count+=1;
    }
    if ($('#chk-oficinas').is(':checked')) {
        categorias.push("oficinas");
        count+=1;
    }
    var comodidades = new Array();

    if ($('#chk-EntregasEmCasa').is(':checked')) {
        comodidades.push("EntregasEmCasa");
    }
    if ($('#chk-EncomendasPorTelefone').is(':checked')) {
        comodidades.push("EncomendasPorTelefone");
    }
    if ($('#chk-TakeAway').is(':checked')) {
        comodidades.push("TakeAway");
    }
    if ($('#chk-Outras').is(':checked')) {
        categorias.push($("#Outras").val())
    }
    var Telefone1 = $("#Telefone1").val();
    var Telefone2 = $("#Telefone2").val();
    var email = $("#Email").val();
    var image= getBase64Image($("#inputGroupFile01"));
    var Facebook = $("#Facebook").val();
    var Instagram = $("#Instagram").val();
    var Twitter = $("#Twitter").val();
    var Website = $("#Website").val();
    var Obs= $("#Obs").val();
    if(DistricSelected==="Distrito"){
        if ($("#alert1").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert1" style="visibility: visible;">Distrito Invalido</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert1").show();
            noErrors=false;
        }
    }else{
        $("#alert1").hide();
    }
    if(ConSelected==="Concelho"){
        if ($("#alert2").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert2" style="visibility: visible;">Concelho Invalido</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert2").show();
            noErrors=false;
        }
    }else{
        $("#alert2").hide();
    }
    if($("#morada").val().length < 5){
        noErrors=false;
    }
    if($("#nome").val().length <= 3){
        noErrors=false;
    }
    if($("#horario").val().length <= 7){
        noErrors=false;
    }
    if(count==0){
        if ($("#alert3").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert3" style="visibility: visible;">Introduza o tipo de estabelecimento</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert3").show();
            noErrors=false;
        }
    }else{
        $("#alert3").hide();
    }
    if(Telefone1.toString().length!=9 && Telefone1.toString().length!=0){
        if ($("#alert4").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert4" style="visibility: visible;">Telefone 1 com formato invalido</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert4").show();
            noErrors=false;
        }
    }else{
        $("#alert4").hide();
    }
    if(Telefone2.toString().length!=9 && Telefone2.toString().length!=0){
        if ($("#alert5").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert5" style="visibility: visible;">Telefone 2 com formato invalido</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert5").show();
            noErrors=false;
        }
    }else{
        $("#alert5").hide();
    }
    if(email.length<7 && email.length!=0){
        if ($("#alert6").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert6" style="visibility: visible;">Email invalido</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert6").show();
            noErrors=false;
        }
    }else{
        $("#alert6").hide();
    }
    if(Facebook.length<5 && Facebook.length!=0){
        if ($("#alert7").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert7" style="visibility: visible;">Facebook Invalido</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert7").show();
            noErrors=false;
        }
    }else{
        $("#alert7").hide();
    }
    if(Twitter.length<5 && Twitter.length!=0){
        if ($("#alert8").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert8" style="visibility: visible;">Twitter Invalido</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert8").show();
            noErrors=false;
        }
    }else{
        $("#alert8").hide();
    }
    if(Instagram.length<5 && Instagram.length!=0){
        if ($("#alert9").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert9" style="visibility: visible;">Instagram Invalido</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert9").show();
            noErrors=false;
        }
    }else{
        $("#alert9").hide();
    }
    if(Website.length<5 && Website.length!=0){
        if ($("#alert10").length == 0){
            var toAppend= '<div class="alert alert-warning" role="alert" id="alert10" style="visibility: visible;">Website Invalido</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0,0);
            noErrors=false;
        }else{
            $("#alert10").show();
            noErrors=false;
        }
    }else{
        $("#alert10").hide();
    }
    if(noErrors){
        $("#Localizacao").css("visibility","hidden");
        $("#Titulo").css("visibility","hidden");
        $("#Contactos").css("visibility","hidden");
        $("#Info").css("visibility","hidden");
        $("#Obs").css("visibility","hidden");
        $("#button").css("visibility","hidden");
        $("#Obrigado").css("visibility","visible");
        window.scrollTo(0,0);
        var object= {"Morada":morada,"Nome":Nome,"Categorias":categorias,"Comodidades":comodidades,"Imagem":Image,"Telefone1":Telefone1,"Telefone2":Telefone2,"email":email,"Facebook":Facebook,"Instagram":Instagram,"Twitter":Twitter,"WebSite":Website,"Obs":Obs};
        localStorage.setItem(DistricSelected+ConSelected,JSON.stringify(object));
    }
});