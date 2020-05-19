$("#distrito").click(function(){
    $("#dropdownMenuButton").text("Aveiro");
});

$("#cacia").click(function(){
    $("#dropdownMenuButton1").text("Cacia");
});

$("#ilhavo").click(function(){
    $("#dropdownMenuButton1").text("Ilhavo");
});



$("#submit").click(function(){
    var DistricSelected= $("#dropdownMenuButton").text();
    var ConSelected=$("#dropdownMenuButton1").text();
    var morada = $("#morada").val();
    var Nome = $("#nome").val();
    var categorias = new Array();
    if ($('#chk-farmacias').is(':checked')) {
        categorias.push("farmacias");
    }
    if ($('#chk-hospitais').is(':checked')) {
        categorias.push("hospitais");
    }
    if ($('#chk-c_saude').is(':checked')) {
        categorias.push("c_saude");
    }
    if ($('#chk-clinicas').is(':checked')) {
        categorias.push("clinicas");
    }
    if ($('#chk-veterinarios').is(':checked')) {
        categorias.push("veterinarios");
    }
    if ($('#chk-mercados').is(':checked')) {
        categorias.push("mercados");
    }
    if ($('#chk-talhos').is(':checked')) {
        categorias.push("talhos");
    }
    if ($('#chk-padarias').is(':checked')) {
        categorias.push("padarias");
    }
    if ($('#chk-restaurantes').is(':checked')) {
        categorias.push("restaurantes");
    }
    if ($('#chk-lavandarias').is(':checked')) {
        categorias.push("lavandarias");
    }
    if ($('#chk-telecomunicacoes').is(':checked')) {
        categorias.push("telecomunicacoes");
    }
    if ($('#chk-combustiveis').is(':checked')) {
        categorias.push("combustiveis");
    }
    if ($('#chk-gas').is(':checked')) {
        categorias.push("gas");
    }
    if ($('#chk-oficinas').is(':checked')) {
        categorias.push("oficinas");
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
    var Facebook = $("#Facebook").val();
    var Instagram = $("#Instagram").val();
    var Twitter = $("#Twitter").val();
    var Website = $("#Website").val();
    var Obs= $("#Obs").val();
    var object= {"Morada":morada,"Nome":Nome,"Categorias":categorias,"Comodidades":comodidades,"Telefone1":Telefone1,"Telefone2":Telefone2,"email":email,"Facebook":Facebook,"Instagram":Instagram,"Twitter":Twitter,"WebSite":Website,"Obs":Obs};
    localStorage.setItem(DistricSelected+ConSelected,JSON.stringify(object));
    $("#Localizacao").css("visibility","hidden");
    $("#Titulo").css("visibility","hidden");
    $("#Contactos").css("visibility","hidden");
    $("#Info").css("visibility","hidden");
    $("#Obs").css("visibility","hidden");
    $("#button").css("visibility","hidden");
    $("#Obrigado").css("visibility","visible");
    
});