console.log(localStorage.getItem("covid19check"))
if(localStorage.getItem("covid19check") == undefined){
    localStorage.clear();
    localStorage.setItem("covid19check", "true");
    var AveiroAveiro = []

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
        Telefones : ['946376283','912563846'],
        email : 'transmontano@gmail.com',
        Facebook : 'facebook.com/otransmontano',
        Instagram : 'instagram.com/otransmontano',
        Twitter : 'twitter.com/otransmontano',
        WebSite : 'otransmontano.com',
        Obs : 'Obrigatório o uso de máscara.'

    }

    var rest2 = {
        Id: randomInt(),
        Nome: 'Churrascaria Tavares',
        Horario: '11h-21h',
        Morada: 'Rua de Dr. Lopes Andrade 23',
        Categorias : [
            'restaurantes'
        ],
        Comodidades : [
            "TakeAway",
            "EntregasPorTelefone"
        ],
        Telefones : ['926378142','963826498'],
        email : 'churrascariatavares@ua.pt',
        Facebook : 'facebook.com/churrascariatavares',
        Instagram : 'instagram.com/churrascariatavares',
        Twitter : 'twitter.com/churrascariatavares',
        WebSite : 'churrascariatavares.com',
        Obs : 'TakeAway a partir das 18h.'

    }

    var merc1 = {
        Id: randomInt(),
        Nome: 'Pingo Doce',
        Horario: '8h-22h',
        Morada: 'Avenida dos Camelos 34',
        Categorias : [
            'mercados'
        ],
        Comodidades : [],
        Telefones : ['918252563','966012011'],
        email : 'pingodoce@venha.ca',
        Facebook : 'facebook.com/pingodoce',
        Instagram : 'instagram.com/pingodoce',
        Twitter : 'twitter.com/pingodoce',
        WebSite : 'pingodoce.com',
        Obs : 'Máscaras obrigatórias e à venda à entrada.'

    }

    var merc2 = {
        Id: randomInt(),
        Nome: 'Intermarche',
        Horario: '8:30h-23h',
        Morada: 'Avenida General Martins 12',
        Categorias : [
            'mercados'
        ],
        Comodidades : [],
        Telefones : ['927383728','910007652'],
        email : 'intermarche@gmail.com',
        Facebook : 'facebook.com/intermarche',
        Instagram : 'instagram.com/intermarche',
        Twitter : 'twitter.com/intermarche',
        WebSite : 'intermarche.com',
        Obs : 'Nennuma observação.'

    }

    AveiroAveiro.push(rest1);
    AveiroAveiro.push(rest2);
    AveiroAveiro.push(merc1);
    AveiroAveiro.push(merc2);

    var json_string = JSON.stringify(AveiroAveiro);

    localStorage.setItem("AveiroAveiro", json_string);

    var AveiroIlhavo = []

    var comb1 = {
        Id: randomInt(),
        Nome: 'Galp Ílhavo',
        Horario: '7h-24h',
        Morada: 'Rua Dr. Lopes Seabra 12',
        Categorias : [
            'combustiveis'
        ],
        Comodidades : [],
        Telefones : ['916273816','923647281'],
        email : 'galpilhavo@gmail.com',
        Facebook : 'facebook.com/galpilhavo',
        Instagram : 'instagram.com/galpilhavo',
        Twitter : 'twitter.com/galpilhavo',
        WebSite : 'galpilhavo.com',
        Obs : 'Apenas uma pessoa no pagamento.'
    }

    var comb2 = {
        Id: randomInt(),
        Nome: 'Prio Ílhavo',
        Horario: '6h-23h',
        Morada: 'Travessa Fonte do Choupo 4',
        Categorias : [
            'combustiveis'
        ],
        Comodidades : [],
        Telefones : ['916378456','934786142'],
        email : 'prioilhavo@gmail.com',
        Facebook : 'facebook.com/prioilhavo',
        Instagram : 'instagram.com/prioilhavo',
        Twitter : 'twitter.com/prioilhavo',
        WebSite : 'prioilhavo.com',
        Obs : 'Uma obs qualquer do prioilhavo'
    }

    var pad1 = {
        Id: randomInt(),
        Nome: 'Padaria Rosa',
        Horario: '6h-20h',
        Morada: 'Rua dos Falcões 4',
        Categorias : [
            'padarias'
        ],
        Comodidades : [],
        Telefones : ['249673564','917348734'],
        email : 'pardariarosa@gmail.com',
        Facebook : 'facebook.com/pardariarosa',
        Instagram : 'instagram.com/pardariarosa',
        Twitter : 'twitter.com/pardariarosa',
        WebSite : 'pardariarosa.com',
        Obs : 'Número limitado de pessoas dentro da padaria.'

    }

    var pad2 = {
        Id: randomInt(),
        Nome: 'Padaria do Catarino',
        Horario: '7h-22h',
        Morada: 'Rua Dr. Carlos Alexandre 45',
        Categorias : [
            'padarias'
        ],
        Comodidades : [],
        Telefones : ['916725384','917734287'],
        email : 'padariacatarino@gmail.com',
        Facebook : 'facebook.com/padariacatarino',
        Instagram : 'instagram.com/padariacatarino',
        Twitter : 'twitter.com/padariacatarino',
        WebSite : 'padariacatarino.com',
        Obs : 'Pastelaria encerrada, só padaria em funcionamento.'

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
