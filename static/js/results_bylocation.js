// Get URL paramter location
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const location_estab = urlParams.get('location');
console.log(location_estab);

var estab_obj = JSON.parse(localStorage.getItem(String(location_estab)))
console.log(estab_obj)

function generate_card(estab_obj){

    /* Div that contains the card. */
    var card_div = document.createElement('div');
    card_div.classList.add('col-xl-4');
    card_div.classList.add('col-lg-6');
    card_div.classList.add('col-sm-12');
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
    info_div.onclick = function(){loadDetails(id)};

    /* Div that contains the text. */
    var inside_div = document.createElement('div');
    inside_div.classList.add("card-body");

    /* Company Name (h4 element). */
    var title = document.createElement('h4');
    title.classList.add('card-title');
    title.innerText = company["name"];

    /* Schedule of the company (p element). */
    var text = document.createElement('p');
    text.classList.add("card-text");
    /* Default schedule */
    text.innerText = "Encerrado";

    var i = 0;
    /* Search in the schedules of the day if the company is opened */
    for(; i < company["schedules"][week_day].length; i++){
        if(company["schedules"][week_day] == "Encerrado"){
            break;
        }
        var work_times = company["schedules"][week_day][i].split("-")
        var start_time = work_times[0].split(":");
        var end_time = work_times[1].split(":");
        if((start_time[0] < hour) || (start_time[0] == hour && start_time[1] <= minutes)){
            if((end_time[0] > hour) ||  (end_time[0] == hour && end_time[1] > minutes)){
                text.innerText = company["schedules"][week_day][i];
                break;
            }   
        }       
    }
    /* Append the company name and the schedule to the div with the text */
    inside_div.appendChild(title);
    inside_div.appendChild(text);

    /* Append the div with the text to the general one */
    info_div.appendChild(inside_div);

    /* Append the image and the content div to the card_div */
    card_div.appendChild(img);
    card_div.appendChild(info_div);

    return card_div;
}

