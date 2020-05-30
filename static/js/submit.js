$(document).ready(function () {
    $("#moradaalert").show();
    $("#nomealert").show();
    $("#horarioalert").show();
    $("#errors").hide();
    $("#Obrigado").hide();

});

function createUUID() {
    return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    console.log(img.width)
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

$("#distrito").click(function () {
    $("#dropdownMenuButton").text("Aveiro");
});

$("#cacia").click(function () {
    $("#dropdownMenuButton1").text("Cacia");
});

$("#ilhavo").click(function () {
    $("#dropdownMenuButton1").text("Ilhavo");
});

$("#morada").change(function () {
    var moradex = $("#morada").val();
    if (moradex.length > 7) {
        $("#moradaalert").hide();
    } else {
        $("#moradaalert").show();
    }
});

$("#nome").change(function () {
    var moradex = $("#nome").val();
    if (moradex.length > 3) {
        $("#nomealert").hide();
    } else {
        $("#nomealert").show();
    }
});

$("#horario").change(function () {
    var moradex = $("#horario").val();
    if (moradex.length >= 5) {
        $("#horarioalert").hide();
    } else {
        $("#horarioalert").show();
    }
});

$("#submit").click(function () {
    $("#errors").show();
    var DistricSelected = $("#dropdownMenuButton").text().trim();
    var ConSelected = $("#dropdownMenuButton1").text().trim();
    var morada = $("#morada").val();
    var Nome = $("#nome").val();
    var horario = $("#horario").val();
    var categorias = new Array();
    noErrors = true;
    var count = 0;
    if ($('#chk-farmacias').is(':checked')) {
        categorias.push("farmacias");
        count += 1;
    }
    if ($('#chk-hospitais').is(':checked')) {
        categorias.push("hospitais");
        count += 1;
    }
    if ($('#chk-c_saude').is(':checked')) {
        categorias.push("c_saude");
        count += 1;
    }
    if ($('#chk-clinicas').is(':checked')) {
        categorias.push("clinicas");
        count += 1;
    }
    if ($('#chk-veterinarios').is(':checked')) {
        categorias.push("veterinarios");
        count += 1;
    }
    if ($('#chk-mercados').is(':checked')) {
        categorias.push("mercados");
        count += 1;
    }
    if ($('#chk-talhos').is(':checked')) {
        categorias.push("talhos");
        count += 1;
    }
    if ($('#chk-padarias').is(':checked')) {
        categorias.push("padarias");
        count += 1;
    }
    if ($('#chk-restaurantes').is(':checked')) {
        categorias.push("restaurantes");
        count += 1;
    }
    if ($('#chk-lavandarias').is(':checked')) {
        categorias.push("lavandarias");
        count += 1;
    }
    if ($('#chk-telecomunicacoes').is(':checked')) {
        categorias.push("telecomunicacoes");
        count += 1;
    }
    if ($('#chk-combustiveis').is(':checked')) {
        categorias.push("combustiveis");
        count += 1;
    }
    if ($('#chk-gas').is(':checked')) {
        categorias.push("gas");
        count += 1;
    }
    if ($('#chk-oficinas').is(':checked')) {
        categorias.push("oficinas");
        count += 1;
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
    var Telefones = new Array();
    var Telefone1 = $("#Telefone1").val();
    var Telefone2 = $("#Telefone2").val();
    Telefones.push(Telefone1);
    Telefones.push(Telefone2);
    var email = $("#Email").val();
    // console.log($("#customFile").prop('files')[0])
    // var image= getBase64Image($("#customFile").prop('files')[0]); 
    var Facebook = $("#Facebook").val();
    var Instagram = $("#Instagram").val();
    var Twitter = $("#Twitter").val();
    var Website = $("#Website").val();
    var Obs = $("#Obs").val();
    var id = createUUID();
    if (DistricSelected === "Distrito *") {
        if ($("#alert1").length == 0) {
            var toAppend = '<div class="alert alert-danger" role="alert" id="alert1" style="visibility: visible;">Insira um distrito.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert1").show();
            noErrors = false;
        }
    } else {
        $("#alert1").hide();
    }
    if (ConSelected === "Concelho *") {
        if ($("#alert2").length == 0) {
            var toAppend = '<div class="alert alert-danger" role="alert" id="alert2" style="visibility: visible;">Insira um concelho.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert2").show();
            noErrors = false;
        }
    } else {
        $("#alert2").hide();
    }
    if ($("#morada").val().length < 5) {
        noErrors = false;
    }
    if ($("#nome").val().length <= 3) {
        noErrors = false;
    }
    if ($("#horario").val().length < 5) {
        noErrors = false;
    }
    if (count == 0) {
        if ($("#alert3").length == 0) {
            var toAppend = '<div class="alert alert-danger" role="alert" id="alert3" style="visibility: visible;">Introduza pelo menos um tipo de estabelecimento.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert3").show();
            noErrors = false;
        }
    } else {
        $("#alert3").hide();
    }
    if ((Telefone1.match(/[0-9]+/) == null || Telefone1.length != 9) && Telefone2.length !=0) {
        if ($("#alert4").length == 0) {
            var toAppend = '<div class="alert alert-warning" role="alert" id="alert4" style="visibility: visible;">Primeiro telefone com formato inválido.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert4").show();
            noErrors = false;
        }
    } else {
        $("#alert4").hide();
    }
    if ((Telefone2.match(/[0-9]+/) == null || Telefone2.length != 9) && Telefone2.length !=0) {
        if ($("#alert5").length == 0) {
            var toAppend = '<div class="alert alert-warning" role="alert" id="alert5" style="visibility: visible;">Segundo telefone com formato inválido.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert5").show();
            noErrors = false;
        }
    } else {
        $("#alert5").hide();
    }
    if (email.match(/[a-z.0-9]+@[a-z]+.[a-z]/) == null && email.length != 0) {
        if ($("#alert6").length == 0) {
            var toAppend = '<div class="alert alert-warning" role="alert" id="alert6" style="visibility: visible;">Email inválido.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert6").show();
            noErrors = false;
        }
    } else {
        $("#alert6").hide();
    }
    if (Facebook.match(/facebook.com\/[a-z]+/) == null && Facebook.length != 0) {
        if ($("#alert7").length == 0) {
            var toAppend = '<div class="alert alert-warning" role="alert" id="alert7" style="visibility: visible;">Facebook inválido.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert7").show();
            noErrors = false;
        }
    } else {
        $("#alert7").hide();
    }
    if (Twitter.match(/twitter.com\/[a-z]+/) == null && Twitter.length != 0) {
        if ($("#alert8").length == 0) {
            var toAppend = '<div class="alert alert-warning" role="alert" id="alert8" style="visibility: visible;">Twitter inválido.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert8").show();
            noErrors = false;
        }
    } else {
        $("#alert8").hide();
    }
    if (Instagram.match(/instagram.com\/[a-z]+/) == null && Instagram.length != 0) {
        if ($("#alert9").length == 0) {
            var toAppend = '<div class="alert alert-warning" role="alert" id="alert9" style="visibility: visible;">Instagram inválido.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert9").show();
            noErrors = false;
        }
    } else {
        $("#alert9").hide();
    }
    if (Website.match(/www.[a-z]+.[a-z]+/) == null && Website.length != 0) {
        if ($("#alert10").length == 0) {
            var toAppend = '<div class="alert alert-warning" role="alert" id="alert10" style="visibility: visible;">Website inválido.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert10").show();
            noErrors = false;
        }
    } else {
        $("#alert10").hide();
    }
    if (morada.length < 5) {
        if ($("#alert11").length == 0) {
            var toAppend = '<div class="alert alert-danger" role="alert" id="alert11" style="visibility: visible;">Morada demasiado curta.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert11").show();
            noErrors = false;
        }
    } else {
        $("#alert11").hide();
    }
    if (horario.length < 5) {
        if ($("#alert12").length == 0) {
            var toAppend = '<div class="alert alert-danger" role="alert" id="alert12" style="visibility: visible;">Horiario inválido.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert12").show();
            noErrors = false;
        }
    } else {
        $("#alert12").hide();
    }
    if (Nome.length <= 3) {
        if ($("#alert13").length == 0) {
            var toAppend = '<div class="alert alert-danger" role="alert" id="alert13" style="visibility: visible;">Nome demasiado curto.</div>';
            $("#errors").append(toAppend);
            window.scrollTo(0, 0);
            noErrors = false;
        } else {
            $("#alert13").show();
            noErrors = false;
        }
    } else {
        $("#alert13").hide();
    }
    if (noErrors) {
        $("#errors").hide();
        $("#Obrigado").show();
        $("#Localizacao").css("visibility", "hidden");
        $("#Titulo").css("visibility", "hidden");
        $("#Contactos").css("visibility", "hidden");
        $("#Info").css("visibility", "hidden");
        $("#Obs").css("visibility", "hidden");
        $("#button").css("visibility", "hidden");

        $("#Obrigado").css("visibility", "visible");
        window.scrollTo(0, 0);
        var object = { "Morada": morada, "Nome": Nome, "Id": id, "Horario": horario, "Categorias": categorias, "Comodidades": comodidades, "Telefones": Telefones, "email": email, "Facebook": Facebook, "Instagram": Instagram, "Twitter": Twitter, "WebSite": Website, "Obs": Obs };
        var jsonObj = JSON.parse(localStorage.getItem(DistricSelected + ConSelected));
        console.log(localStorage.getItem(DistricSelected + ConSelected));
        jsonObj.push(object);
        console.log("ai e tal tou aqui")
        localStorage.setItem(DistricSelected + ConSelected, JSON.stringify(jsonObj));
    }
    window.scrollTo(0, 0);
});