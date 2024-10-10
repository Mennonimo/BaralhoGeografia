var perguntas = [
    'Qual dos animais abaixo está extinto?',
    'Qual dos biomas abaixo é característico da Nova Zelândia?',
    'Qual é o país da Oceania que possui a maior quantidade de floresta tropicais?',
    'Qual é o maior deserto da Austrália?',
    'Qual dos animais abaixo é nativo da Nova Zelândia?',
    'Qual fenômeno natural afeta frequentemente as ilhas do Pacífico, como Fiji e Samoa?',
    'Que animal abaixo é encontrado exclusivamente na Antártida',
    'Cite 5 espécies endemicos da Oceania:',
    'Qual clima predominante de Vanuatu?',
    'Qual é o principal fato que influencia o clima da Oceania?',

    'Qual o último país da Oceania a se tornar independente?',
    'Qual animal derrotou o exército da Austrália em uma guerra?',
    'Em qual época foram erguidas as estátuas da Ilha de Páscoa?',
    'Qual o nome do primeiro explorador a chegar nas regiões da Tasmânia e Nova Zelândia?',
    'Em que ano foi confirmada a existência do continente Antártico?',
    'Em qual ano foi assinado o tratado da antártica?',
    'Qual o nome do maior lago subglacial, que foi descoberto pelos russos em 1996?',
    'O conceito de totemismo nas religiões da Oceania refere-se a:',
    'Os conceitos religiosos de mana e tapu se originou em qual destas etinias?',
    'O utensílio didgeridoo inventado pelos Aborígenes australianos é um(a):',
    'Qual a quantidade de países que reivindicaram partes da Antártica?',

    'Atualmente quais países ainda reivindicam a Antártica como sua?',
    'Qual é a Capital de Fiji?',
    'Qual é a Capital da Nova Zelândia?',
    'Qual é a Capital da Austrália?',
    'Quantos países existem no continente da antártica?',
    'Qual pais é o maior da Oceania e qual é o menor?',
    'Qual a porcentagem do numero global de pessoas existente na Oceania?',
    'Qual o IDH(índice de desenvolvimento Humano) da Antártica?',
    'Qual o IDH(índice de desenvolvimento Humano) da Austrália?',
    'Qual é o país menos visitado da Oceania?'
];

var alternativaA = [
    'a&#41; Ornintorrinco.',
    'a&#41; Tundra.',
    'a&#41; Nova Zelândia.',
    'a&#41; Deserto de Simpson.',
    'a&#41; Canguru.',
    'a&#41; Furações.',
    'a&#41; Foca-Leopárdo.',
    '',
    'a&#41; Equatorial.',
    'a&#41; Correntes oceânicas.',

    'a&#41; Timor Leste.',
    'a&#41; Cangurus.',
    'a&#41; entre os seculos IX e XVII d.C.',
    'a&#41; Zhang He.',
    'a&#41; Em 1770.',
    'a&#41; Em 1961.',
    'a&#41; Lago Whillians.',
    'a&#41; O uso de máscaras em rituais.',
    'a&#41; Maori.',
    'a&#41; Instrumento musical usado em rituais religiosos.',
    '',

    'a&#41; Reino Unido, Austrália, Áustria, Bélgica, Japão e França.',
    'a&#41; Labasa.',
    'a&#41; Auckland.',
    'a&#41; Canberra.',
    'a&#41; 3.',
    'a&#41; Austrália e Samoa.',
    'a&#41; 1,3%.',
    'a&#41; 0,239.',
    'a&#41; 0,951.',
    'a&#41; Fiji.'
];

var alternativaB = [
    'b&#41; Diabo da Tasmânia.',
    'b&#41; Floresta temperada.',
    'b&#41; Fiji.',
    'b&#41; Deserto de Gibson.',
    'b&#41; Kiwi.',
    'b&#41; Tornados.',
    'b&#41; Urso Polar.',
    '',
    'b&#41; Temperado.',
    'b&#41; Altitude.',

    'b&#41; Fiji.',
    'b&#41; Diabos da Tasmânia.',
    'b&#41; Entre os séculos XVI e XIX a.C.',
    'b&#41; Abel Tasman.',
    'b&#41; Em 1820.',
    'b&#41; Em 1895.',
    'b&#41; Lago Mercer.',
    'b&#41; A adoração a deuses do mar.',
    'b&#41; Aborígene Australianos.',
    'b&#41; Um tipo de arma usada em guerras ou cerimonias.',
    '',

    'b&#41; Canadá, Nova Zelândia, China, Reino Unido, Estados Unidos e Uruguai.',
    'b&#41; Ba.',
    'b&#41; Dunedin.',
    'b&#41; Sydney.',
    'b&#41; 2.',
    'b&#41; Austrália e Tonga.',
    'b&#41; 0,05%.',
    'b&#41; 0,584.',
    'b&#41; 0,523.',
    'b&#41; Nova Zelândia.',
];

var alternativaC = [
    'c&#41; Lobo da Tasmânia.',
    'c&#41; Taiga.',
    'c&#41; Papua-Nova Guiné.',
    'c&#41; Deserto Vitória.',
    'c&#41; Diabo da Tasmânia.',
    'c&#41; Ciclones tropicais.',
    'c&#41; Pinguim-imperador.',
    '',
    'c&#41; Desértico.',
    'c&#41; Atividades vulcânicas.',

    'c&#41; Papua-Nova Guiné.',
    'c&#41; Emus.',
    'c&#41; entre os séculos VI e II a.C.',
    'c&#41; Vasco da Gama.',
    'c&#41; Em 1650.',
    'c&#41; Em 1990.',
    'c&#41; Lago Vostok.',
    'c&#41; A ligação espiritual entre grupos e elementos da natureza.',
    'c&#41; tribos Polinésias.',
    'c&#41; Um amuleto de proteção passado entre os membros da comunidade.',
    '',

    'c&#41; Índia, Itália, Noruega, Sérvia, Países Baixos, Argentina e Chile.',
    'c&#41; Suva.',
    'c&#41; Tauranga.',
    'c&#41; Darwin.',
    'c&#41; 1.',
    'c&#41; Austrália e Nova Zelândia.',
    'c&#41; 0,5%.',
    'c&#41; 0,827.',
    'c&#41; 0,967.',
    'c&#41; Nauru'
];

var alternativaD = [
    'd&#41; Equidna.',
    'd&#41; Savana.',
    'd&#41; Austrália.',
    'd&#41; Deserto de Tanami.',
    'd&#41; Ornintorrinco.',
    'd&#41; Terremotos.',
    'd&#41; Narval.',
    '',
    'd&#41; Tundra.',
    'd&#41; Atividades vulcânicas.',

    'd&#41; Micronesia.',
    'd&#41; Crocodilos.',
    'd&#41; entre os Séculos XIII e XVI d.C.',
    'd&#41; Ferdinando de Magalhães.',
    'd&#41; Em 1920.',
    'd&#41; Em 1950.',
    'd&#41; Lago Ellsworth.',
    'd&#41; A construção de templos para os espíritos ancestrais.',
    'd&#41; Tribos Micronesias',
    'd&#41; Uma ferramenta agriola',
    '',

    'd&#41; Argentina, Reino Unido, Chile, Noruega, Nova Zelândia, Austrália, França.',
    'd&#41; Nadi.',
    'd&#41; Wellington.',
    'd&#41; Brisbane',
    'd&#41; 0.',
    'd&#41; Austrália Nauru.',
    'd&#41; 0,2%.',
    'd&#41; 0.',
    'd&#41; 0,382.',
    'd&#41; Samoa'
];

var resposta = [
    'pergunta3',
    'pergunta2',
    'pergunta3',
    'pergunta2',
    'pergunta2',
    'pergunta3',
    'pergunta3',
    'extra1',
    'pergunta1',
    'pergunta1',

    'pergunta1',
    'pergunta3',
    'pergunta4',
    'pergunta2',
    'pergunta2',
    'pergunta1',
    'pergunta3',
    'pergunta3',
    'pergunta1',
    'pergunta1',
    'extra2',

    'pergunta4',
    'pergunta3',
    'pergunta4',
    'pergunta1',
    'pergunta4',
    'pergunta4',
    'pergunta3',
    'pergunta4',
    'pergunta1',
    'pergunta3',
];

var animacao = true;
var aleatorio = null;
var numerosValidos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var numerosSorteados = [];
var numeroTirado = null;

function trocarCarta() {

    if (numerosValidos.length === numerosSorteados.length) {
        numerosSorteados = [];
    }

    var carta = document.getElementById('carta-compra');
    var texto = document.getElementById('texto');
    var texto2 = document.getElementById('texto2');
    var pergunta1 = document.getElementById('pergunta1');
    var pergunta2 = document.getElementById('pergunta2');
    var pergunta3 = document.getElementById('pergunta3');
    var pergunta4 = document.getElementById('pergunta4');
    var extra = document.getElementById('extra');


    if (animacao == true) {
        animacao = false;

        /*Preparar Carta*/
        carta.style.animation = "tirarCarta 1s ease forwards";
        texto.style.animation = "texttirarCarta 1s ease forwards";

        /*Esconder Carta*/
        setTimeout(function () {
            carta.style.zIndex = "0";
            texto.style.zIndex = "0";
            carta.style.animation = "guardarCarta 1s ease forwards";
            texto.style.animation = "textguardarCarta 1s ease forwards";
        }, 1500);

        /*----------------------------------------------------------------------*/
        /*Colocar comandos quando esconder aqui*/
        setTimeout(function () {

            pergunta1.style.color = "black";
            pergunta2.style.color = "black";
            pergunta3.style.color = "black";
            pergunta4.style.color = "black";
            extra.style.opacity = "0";
            extra.innerHTML = "";
            extra.style.color = "black"

            do {
                aleatorio = Math.floor(Math.random() * numerosValidos.length);
                numeroTirado = numerosValidos[aleatorio]
            } while (numerosSorteados.includes(numeroTirado));

            numerosSorteados.push(numeroTirado);

            texto2.innerHTML = perguntas[aleatorio];
            pergunta1.innerHTML = alternativaA[aleatorio];
            pergunta2.innerHTML = alternativaB[aleatorio];
            pergunta3.innerHTML = alternativaC[aleatorio];
            pergunta4.innerHTML = alternativaD[aleatorio];



        }, 2700)
        /*----------------------------------------------------------------------*/

        /*Tirar Carta Escondida*/
        setTimeout(function () {

            carta.style.animation = "tirarCartaGuardada 1s ease forwards";
            texto.style.animation = "texttirarCartaGuardada 1s ease forwards";
        }, 2750);

        /*Colocar Carta em Cima*/
        setTimeout(function () {
            carta.style.zIndex = "4";
            texto.style.zIndex = "5";
            carta.style.animation = "colocarCartaEmCima 1s ease forwards";
            texto.style.animation = "textcolocarCartaEmCima 1s ease forwards";
        }, 4000);
    } else {
        if (resposta[aleatorio] == "extra1") {

            pergunta1.style.opacity = "0";
            pergunta2.style.opacity = "0";
            pergunta3.style.opacity = "0";
            pergunta4.style.opacity = "0";
            setTimeout(function () {
                pergunta1.innerHTML = "Kiwi (Apteryx spp.)";
                pergunta2.innerHTML = "Diabo da Tasmânia (Sarcophilus harrisii)";
                pergunta3.innerHTML = "Ornitorrinco (Ornithorhynchus anatinus)";
                pergunta4.innerHTML = "Cacatua-de-crista-amarela (Cacatua galerita)";
                extra.innerHTML = "Galo-da-índia-da-nova-guiné (Megapodius decollatus)";

                pergunta1.style.opacity = "1";
                pergunta2.style.opacity = "1";
                pergunta3.style.opacity = "1";
                pergunta4.style.opacity = "1";
                extra.style.opacity = "1"
            }, 400);
            animacao = true;
        } else if (resposta[aleatorio] == "extra2") {
            extra.innerHTML = "7 Países.";
            extra.style.opacity = "1";
            animacao = true;
        } else {
            var certa = document.getElementById(resposta[aleatorio]);
            certa.style.color = "#00ff00";
            animacao = true;
        }
    }
}