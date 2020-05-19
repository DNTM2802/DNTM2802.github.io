var selected_id = -1;


// Get URL paramter location
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const location_estab = urlParams.get('location');
console.log(location_estab);

var estab_obj = JSON.parse(localStorage.getItem(String(location_estab)))
console.log(estab_obj)

for (var k = 0; k < estab_obj.length; k++) {
    //console.log(estab_obj[k]);
    results.appendChild(generate_card(estab_obj[k]));
}


function generate_card(estab_obj) {
    console.log("hey");
    /* Div that contains the card. */
    var card_div = document.createElement('div');
    card_div.classList.add('col-xl-4');
    card_div.classList.add('col-lg-6');
    card_div.classList.add('col-sm-12');
    card_div.id = estab_obj["Id"];
    var categories = estab_obj["Categorias"];

    // Set card classes to company categories
    for (var i = 0; i < categories.length; i++) {
        card_div.classList.add(categories[0]);
    }

    /* Logo image of the company (if empty use the default image). */
    var img = document.createElement('img');
    img.classList.add('card-img-top');
    // if(company["images"]["logo"] != ''){
    //     img.src = company["images"]["logo"];
    // }
    // else{
    //     img.src = "https://i.imgur.com/QfUEUoy.jpg"
    // }
    img.src = "https://i.imgur.com/QfUEUoy.jpg"
    img.alt = "Logotipo";

    /* Interior of the div. */
    var info_div = document.createElement('div');
    info_div.classList.add("card");
    /* Onclick event to load the detail version of the company. */
    info_div.onclick = function () { loadDetails(estab_obj["Id"]) };

    /* Div that contains the text. */
    var inside_div = document.createElement('div');
    inside_div.classList.add("card-body");

    /* Company Name (h3 element). */
    var title = document.createElement('h3');
    title.classList.add('card-title');
    title.innerText = estab_obj["Nome"];

    /* Company Type (p element). */
    var type_est = document.createElement('p');
    type_est.classList.add('card-text');
    type_est.innerText = estab_obj["Categorias"][0];

    /* Schedule of the company (h4 element). */
    var time_est = document.createElement('h4');
    time_est.classList.add("card-time");
    /* Default schedule */
    time_est.innerText = "Encerrado";

    // var i = 0;
    // /* Search in the schedules of the day if the company is opened */
    // for(; i < company["schedules"][week_day].length; i++){
    //     if(company["schedules"][week_day] == "Encerrado"){
    //         break;
    //     }
    //     var work_times = company["schedules"][week_day][i].split("-")
    //     var start_time = work_times[0].split(":");
    //     var end_time = work_times[1].split(":");
    //     if((start_time[0] < hour) || (start_time[0] == hour && start_time[1] <= minutes)){
    //         if((end_time[0] > hour) ||  (end_time[0] == hour && end_time[1] > minutes)){
    //             text.innerText = company["schedules"][week_day][i];
    //             break;
    //         }   
    //     }       
    // }

    /* Append the company name and the schedule to the div with the text */
    inside_div.appendChild(title);
    inside_div.appendChild(type_est);
    inside_div.appendChild(time_est);

    /* Append the div with the text to the general one */
    info_div.appendChild(inside_div);

    /* Append the image and the content div to the card_div */
    card_div.appendChild(img);
    card_div.appendChild(info_div);

    return card_div;
}

function generate_details(this_card) {



    /* Div that contains the card. */
    var outside_card = document.createElement("div");

    outside_card.classList.add("col-xl-12");
    outside_card.classList.add("col-lg-12");
    outside_card.id = "details";
    var card_div = document.createElement("div");
    card_div.classList.add("details-card");

    /* Div that indicates that there are multiple collumns being used inside. */
    var row = document.createElement("div");
    row.classList.add("row");

    /* Div containing the first collum information. */
    var info1_div = document.createElement("div");
    info1_div.classList.add("col-xl-6");
    info1_div.classList.add("col-lg-12");
    info1_div.classList.add("details-card-section");

    /* Span element containing the address. */
    var address = document.createElement("span");
    var text_address = document.createElement("p");
    text_address.innerHTML += "<b>Morada</b><br>"
    var splited_address = this_card["Morada"].split(",");

    /*If the address is spitable by a "," than split it breaking by that point. */
    text_address.innerHTML += splited_address.length > 1 ? splited_address[0] + ",<br/>" + splited_address[1] : this_card["Morada"];
    address.appendChild(text_address);

    /* Add address. */
    var schedule = document.createElement("span");
    var text_address = document.createElement("p");
    text_address.innerHTML += "<b>Horário</b><br>"
    text_address.innerHTML += this_card["Horario"];
    schedule.appendChild(text_address);

    
    info1_div.appendChild(schedule);
    info1_div.appendChild(address);

    /* Span element containing the contact info. */
    var contact = document.createElement("span");
    var text = document.createElement("p");
    text.innerHTML = "<b>Contactos</b><br>";
    /* For each cellphone insert it's contenct and a break line. */
    var counter = 0;
    this_card["Telefones"].forEach(contact => {
        if (contact != "") {
            if (counter != 0) {
                text.innerHTML += "<br/>";
            }
            text.innerHTML += contact.slice(0, 3) + " " + contact.slice(3, 6) + " " + contact.slice(6, 9);
            counter++;
        }
    });

    contact.appendChild(text);

    /* Add the contact info. */
    info1_div.appendChild(contact);

    /* Span containing home delevery info. */
    var delevery = document.createElement("span");

    var comodities = this_card["Comodidades"];
    
    delevery.innerHTML += "<p><b>Serviços Disponíveis</b></p>";
    
    if (comodities.indexOf("EntregasEmCasa") > -1) {
        delevery.innerHTML += '<img style="width:20px" src="static/img/comodity_yes.svg">';
    } else {
        delevery.innerHTML += '<img style="width:20px" src="static/img/comodity_no.svg">';
    }
    delevery.innerHTML += "<p style='display:inline'> Entregas ao Domicílio</p><br><br>";

    
    if (comodities.indexOf("EntregasPorTelefone") > -1) {
        delevery.innerHTML += '<img style="width:20px" src="static/img/comodity_yes.svg">';
    } else {
        delevery.innerHTML += '<img style="width:20px" src="static/img/comodity_no.svg">';
    }
    delevery.innerHTML += "<p style='display:inline'> Encomendas por telefone</p><br><br>";

    
    if (comodities.indexOf("TakeAway") > -1) {
        delevery.innerHTML += '<img style="width:20px" src="static/img/comodity_yes.svg">';
    } else {
        delevery.innerHTML += '<img style="width:20px" src="static/img/comodity_no.svg">';
    }
    delevery.innerHTML += "<p style='display:inline'> Take Away</p><br><br>";


    /* Add home delevery info. */
    //info1_div.appendChild(delevery);

    /* Span containing the social pages information. */
    // var categories = document.createElement("span");
    // categories_text = document.createElement("p");
    // categories_text.innerHTML = "<b>Categorias:</b>";
    // categories.appendChild(categories_text);
    // /* Div to indicate the use of collumns inside. */
    // var categories_div = document.createElement("div");
    // categories_div.classList.add("row");
    // /* Use the hole row as one collumn. */
    // var categories_col = document.createElement("div");
    // categories_col.classList.add("col-12")

    // // for (l = 0; l < this_card["Categorias"].length; l++) {
    // //     if (this_card["Categorias"][l] == "padarias" || this_card["Categorias"][l] == "talhos") {
    // //         var category = document.createElement("img");
    // //         category.src = categories_icon[this_card["Categorias"][l]];
    // //         category.classList.add("card-category-img");
    // //         categories_col.appendChild(category);
    // //     }
    // //     else {
    // //         var category = document.createElement("i");
    // //         category.classList.add("fas");
    // //         category.classList.add(categories_icon[this_card["Categorias"][l]]);
    // //         if (this_card["Categorias"][l] != "Banco" && this_card["Categorias"][l] != "Serviço Administrativo") {
    // //             category.classList.add("fa-lg");
    // //         }
    // //         category.classList.add("button");
    // //         categories_col.appendChild(category);
    // //     }
    // // }

    // /* Append the collumn div to the row div. */
    // categories_div.appendChild(categories_col);

    // /* Append the row div to the span div. */
    // categories.appendChild(categories_div);

    // /* Add the categories info. */
    // info1_div.appendChild(categories);

    /* Span containing the social pages information. */
    var social = document.createElement("span");
    // social_text = document.createElement("p");
    // social_text.innerHTML = "<b>Redes Sociais:</b>";
    // social.appendChild(social_text);

    /* Div to indicate the use of collumns inside. */
    var social_div = document.createElement("div");
    social_div.classList.add("row");

    /* Use the hole row as one collumn. */
    var div_col = document.createElement("div");
    div_col.classList.add("col-12")

    /* If it contains a facebook link, insert the facebook icon and the link. */
    if (this_card["Facebook"] != "") {
        var a = document.createElement("a");
        var fb = document.createElement("i");
        fb.classList.add("fa");
        fb.classList.add("fa-facebook");
        fb.classList.add("fa-lg");
        fb.classList.add("button");
        a.href = this_card["Facebook"];
        a.target = "_blank";
        a.appendChild(fb)
        div_col.appendChild(a);
    }
    /* If it contains a instagram link, insert the instagram icon and the link. */
    if (this_card["Instagram"] != "") {
        var a = document.createElement("a");
        var ig = document.createElement("i");
        ig.classList.add("fa");
        ig.classList.add("fa-instagram");
        ig.classList.add("fa-lg");
        ig.classList.add("button");
        a.href = this_card["Instagram"];
        a.target = "_blank";
        a.appendChild(ig)
        div_col.appendChild(a);
    }
    /* If it contains a twitter link, insert the twitter icon and the link. */
    if (this_card["Twitter"] != "") {
        var a = document.createElement("a");
        var tt = document.createElement("i");
        tt.classList.add("fa");
        tt.classList.add("fa-twitter");
        tt.classList.add("fa-lg");
        tt.classList.add("button");
        a.href = this_card["Twitter"];
        a.target = "_blank";
        a.appendChild(tt)
        div_col.appendChild(a);
    }
    // /* If it contains a maps link, insert the map icon and the link. */
    // if (companies[id]["gmaps_url"] != "") {
    //     var a = document.createElement("a");
    //     var gm = document.createElement("i");
    //     gm.classList.add("fas");
    //     gm.classList.add("fa-map-marker-alt");
    //     gm.classList.add("fa-lg");
    //     gm.classList.add("button");
    //     a.href = companies[id]["gmaps_url"];
    //     a.target = "_blank";
    //     a.appendChild(gm)
    //     div_col.appendChild(a);
    // }
    /* Append the collumn div to the row div. */
    social_div.appendChild(div_col);

    /* Append the row div to the span div. */
    social.appendChild(social_div);

    /* Add the social info. */
    info1_div.appendChild(social);

    /* Div containing the second collum information. */
    var info2_div = document.createElement("div");
    info2_div.classList.add("col-xl-6");
    info2_div.classList.add("col-lg-12");
    info2_div.classList.add("details-card-section");

    /* Generate the shedule representation. */
    // generate_schedule(id, info2_div);


    info2_div.appendChild(delevery);

    /* If there are notes insert them */
    if (this_card["Obs"] != "") {
        /* Span containing the notes. */
        var span = document.createElement("span");
        /* Insert the notes and the title of the section. */
        span.innerHTML = "<p><b>Observações</b><br/>" + this_card["Obs"] + "</p>";
        /* Add notes information. */
        info2_div.appendChild(span);
    }

    /* Add first collumn to the row div. */
    row.appendChild(info1_div);
    /* Add second collumn to the row div. */
    row.appendChild(info2_div);
    /* Add the row div to the card. */
    card_div.appendChild(row);
    outside_card.appendChild(card_div);
    return outside_card;
}

function loadDetails(id) {

    var this_card = {};
    var found = false;
    for (var k = 0; k < estab_obj.length; k++) {
        if (estab_obj[k]["Id"] == id) {
            this_card = estab_obj[k];
            found = true;
            break;
        };
    }

    if (found) {
        /* Get the results div. */
        var results = document.getElementById('results');
        var childnodes = results.childNodes;

        /* If the there is a previou selected div. */
        if (selected_id != -1) {
            /* Remove the details from the results div. */
            var details = document.getElementById('details');
            details.parentNode.removeChild(details);
            /* Remove the active class from the corresponding node. */
            for (k = 0; k < childnodes.length; k++) {
                if (childnodes[k].id == selected_id) {
                    childnodes[k].childNodes[1].classList.remove("card-clicked");
                }
            }


        }

        /* If the new id is different from the previous id (clicked on a new card). */
        if (selected_id != id) {
            /* Update the selected id. */
            selected_id = id;

            /* Add the active class to the corresponding general card. */
            for (k = 0; k < childnodes.length; k++) {
                if (childnodes[k].id == selected_id) {
                    childnodes[k].childNodes[1].classList.add("card-clicked");
                }
            }

            /* Deppending on the screen size the position of the detail card differs. */
            /* < 992 -> one result per row -> detail card is placed after the card. */
            if (document.getElementsByTagName('body')[0].clientWidth < 992) {
                for (i = 0; i < childnodes.length; i++) {
                    if (id == childnodes[i].id) {
                        results.insertBefore(generate_details(this_card), childnodes[i + 1]);
                        break;
                    }
                }
            }
            /* < 1200 -> two results per row -> detail card is placed after the last card of that row. */
            else if (document.getElementsByTagName('body')[0].clientWidth < 1200) {
                for (i = 0; i < childnodes.length; i++) {
                    if (id == childnodes[i].id) {
                        while (((i-1) % 2) != 1) {
                            i++;
                        }
                        results.insertBefore(generate_details(this_card), childnodes[i + 1]);
                        break;
                    }
                }
            }
            /* > 1200 -> three results per row -> detail card is placed after the last card of that row. */
            else {
                console.log(childnodes);
                for (i = 0; i < childnodes.length; i++) {
                    if (id == childnodes[i].id) {
                        while (((i-1) % 3) != 2) {
                            i++;
                        }
                        results.insertBefore(generate_details(this_card), childnodes[i + 1]);
                        break;
                    }
                }
            }
        }
        /* The card was only deselected (no active detail card). */
        else {

            selected_id = -1;
        }
    } else {

    }


}



