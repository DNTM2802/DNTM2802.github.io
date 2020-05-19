localStorage.clear();

var AveiroCacia = []

var rest1 = {
    Nome: 'O Transmontano',
    Morada: 'Rua dos Cravos 8',
    Categorias : [
        'restaurantes'
    ],
    Telefone1 : 919191919,
    Telefone2 : 919191919,
    email : 'duarte.ntm@ua.pt',
    Facebook : 'facevook.com/duarte',
    Instagram : 'instagram.com/duarte',
    Twitter : 'twitter.com/duarte',
    WebSite : 'duarte.com',
    Obs : 'Uma obs qualquer'

}

var rest2 = {
    Nome: 'Churrascaria Tavares',
    Morada: 'A morada da churrascaria',
    Categorias : [
        'restaurantes'
    ],
    Telefone1 : 909090909,
    Telefone2 : 939393939,
    email : 'anibal.ntm@ua.pt',
    Facebook : 'facevook.com/anibal',
    Instagram : 'instagram.com/anibal',
    Twitter : 'twitter.com/anibal',
    WebSite : 'anibal.com',
    Obs : 'Uma obs qualquer do anibal'

}

var merc1 = {
    Nome: 'Pingo Doce',
    Morada: 'A morada do Pingo Doce',
    Categorias : [
        'mercados'
    ],
    Telefone1 : 123143414,
    Telefone2 : 536325125,
    email : 'pingo@ua.pt',
    Facebook : 'facevook.com/pingo',
    Instagram : 'instagram.com/pingo',
    Twitter : 'twitter.com/pingo',
    WebSite : 'pingo.com',
    Obs : 'Uma obs qualquer do pingo doce'

}

var merc2 = {
    Nome: 'Intermarche',
    Morada: 'A morada da intermarche',
    Categorias : [
        'mercados'
    ],
    Telefone1 : 909090909,
    Telefone2 : 939393939,
    email : 'intermarche@ua.pt',
    Facebook : 'facevook.com/intermarche',
    Instagram : 'instagram.com/intermarche',
    Twitter : 'twitter.com/intermarche',
    WebSite : 'intermarche.com',
    Obs : 'Uma obs qualquer do intermarche'

}

AveiroCacia.push(rest1);
AveiroCacia.push(rest2);
AveiroCacia.push(merc1);
AveiroCacia.push(merc2);

var json_string = JSON.stringify(AveiroCacia);

localStorage.setItem("AveiroCacia", json_string);

var AveiroIlhavo = []

var comb1 = {
    Nome: 'Galp Ílhavo',
    Morada: 'Morada da Galp de Ílhavo',
    Categorias : [
        'combustiveis'
    ],
    Telefone1 : 456789008,
    Telefone2 : 098765435,
    email : 'galpilhavo@ua.pt',
    Facebook : 'facevook.com/galpilhavo',
    Instagram : 'instagram.com/galpilhavo',
    Twitter : 'twitter.com/galpilhavo',
    WebSite : 'galpilhavo.com',
    Obs : 'Uma obs da galpilhavo'

}

var comb2 = {
    Nome: 'Prio Ílhavo',
    Morada: 'A morada da da Prio de Ílhavo',
    Categorias : [
        'combustiveis'
    ],
    Telefone1 : 909090909,
    Telefone2 : 939393939,
    email : 'prioilhavo@ua.pt',
    Facebook : 'facevook.com/prioilhavo',
    Instagram : 'instagram.com/prioilhavo',
    Twitter : 'twitter.com/prioilhavo',
    WebSite : 'prioilhavo.com',
    Obs : 'Uma obs qualquer do prioilhavo'

}

var pad1 = {
    Nome: 'Padaria Rosa',
    Morada: 'A morada da Padaria Rosa',
    Categorias : [
        'padarias'
    ],
    Telefone1 : 123143414,
    Telefone2 : 536325125,
    email : 'pardariarosa@ua.pt',
    Facebook : 'facevook.com/pardariarosa',
    Instagram : 'instagram.com/pardariarosa',
    Twitter : 'twitter.com/pardariarosa',
    WebSite : 'pardariarosa.com',
    Obs : 'Uma obs qualquer da pardaria rosa'

}

var pad2 = {
    Nome: 'Padaria do Catarino',
    Morada: 'A morada da Padaria do Catarino',
    Categorias : [
        'padarias'
    ],
    Telefone1 : 134253243,
    Telefone2 : 657588675,
    email : 'padariacatarino@ua.pt',
    Facebook : 'facevook.com/padariacatarino',
    Instagram : 'instagram.com/padariacatarino',
    Twitter : 'twitter.com/padariacatarino',
    WebSite : 'padariacatarino.com',
    Obs : 'Uma obs qualquer da padaria catarino'

}

AveiroIlhavo.push(comb1);
AveiroIlhavo.push(comb2);
AveiroIlhavo.push(pad1);
AveiroIlhavo.push(pad2);

var json_string_avilhavo = JSON.stringify(AveiroIlhavo);

localStorage.setItem("AveiroIlhavo", json_string_avilhavo);


