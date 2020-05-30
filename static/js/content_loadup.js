if(window.localStorage.length == 0){
    localStorage.clear();

    var AveiroCacia = []

    var rest1 = {
        Id: randomInt(),
        Nome: 'O Transmontano',
        Horario: '13h-19h',
        Morada: 'Rua dos Cravos 8',
        Categorias : [
            'restaurantes'
        ],
        Comodidades : [
            "TakeAway"
        ],
        Telefones : ['134253243','657588675'],
        email : 'duarte.ntm@ua.pt',
        Facebook : 'facevook.com/duarte',
        Instagram : 'instagram.com/duarte',
        Twitter : 'twitter.com/duarte',
        WebSite : 'duarte.com',
        Obs : 'Uma obs qualquer'

    }

    var rest2 = {
        Id: randomInt(),
        Nome: 'Churrascaria Tavares',
        Horario: '13h-19h',
        Morada: 'A morada da churrascaria',
        Categorias : [
            'restaurantes'
        ],
        Comodidades : [
            "TakeAway",
            "EntregasPorTelefone"
        ],
        Telefones : ['134253243','657588675'],
        email : 'anibal.ntm@ua.pt',
        Facebook : 'facevook.com/anibal',
        Instagram : 'instagram.com/anibal',
        Twitter : 'twitter.com/anibal',
        WebSite : 'anibal.com',
        Obs : 'Uma obs qualquer do anibal'

    }

    var merc1 = {
        Id: randomInt(),
        Nome: 'Pingo Doce',
        Horario: '13h-19h',
        Morada: 'A morada do Pingo Doce',
        Categorias : [
            'mercados'
        ],
        Comodidades : [],
        Telefones : ['134253243','657588675'],
        email : 'pingo@ua.pt',
        Facebook : 'facevook.com/pingo',
        Instagram : 'instagram.com/pingo',
        Twitter : 'twitter.com/pingo',
        WebSite : 'pingo.com',
        Obs : 'Uma obs qualquer do pingo doce'

    }

    var merc2 = {
        Id: randomInt(),
        Nome: 'Intermarche',
        Horario: '13h-19h',
        Morada: 'A morada da intermarche',
        Categorias : [
            'mercados'
        ],
        Comodidades : [],
        Telefones : ['134253243','657588675'],
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
        Id: randomInt(),
        Nome: 'Galp Ílhavo',
        Horario: '13h-19h',
        Morada: 'Morada da Galp de Ílhavo',
        Categorias : [
            'combustiveis'
        ],
        Comodidades : [],
        Telefones : ['134253243','657588675'],
        email : 'galpilhavo@ua.pt',
        Facebook : 'facevook.com/galpilhavo',
        Instagram : 'instagram.com/galpilhavo',
        Twitter : 'twitter.com/galpilhavo',
        WebSite : 'galpilhavo.com',
        Obs : 'Uma obs da galpilhavo'

    }

    var comb2 = {
        Id: randomInt(),
        Nome: 'Prio Ílhavo',
        Horario: '13h-19h',
        Morada: 'A morada da da Prio de Ílhavo',
        Categorias : [
            'combustiveis'
        ],
        Comodidades : [],
        Telefones : ['134253243','657588675'],
        email : 'prioilhavo@ua.pt',
        Facebook : 'facevook.com/prioilhavo',
        Instagram : 'instagram.com/prioilhavo',
        Twitter : 'twitter.com/prioilhavo',
        WebSite : 'prioilhavo.com',
        Obs : 'Uma obs qualquer do prioilhavo'

    }

    var pad1 = {
        Id: randomInt(),
        Nome: 'Padaria Rosa',
        Horario: '13h-19h',
        Morada: 'A morada da Padaria Rosa',
        Categorias : [
            'padarias'
        ],
        Comodidades : [],
        Telefones : ['134253243','657588675'],
        email : 'pardariarosa@ua.pt',
        Facebook : 'facevook.com/pardariarosa',
        Instagram : 'instagram.com/pardariarosa',
        Twitter : 'twitter.com/pardariarosa',
        WebSite : 'pardariarosa.com',
        Obs : 'Uma obs qualquer da pardaria rosa'

    }

    var pad2 = {
        Id: randomInt(),
        Nome: 'Padaria do Catarino',
        Horario: '13h-19h',
        Morada: 'A morada da Padaria do Catarino',
        Categorias : [
            'padarias'
        ],
        Comodidades : [],
        Telefones : ['134253243','657588675'],
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
}

function randomInt() { // min and max included 
    return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
}