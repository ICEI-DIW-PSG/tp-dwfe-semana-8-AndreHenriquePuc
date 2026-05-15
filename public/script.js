function dados (){
    const catalogo = {
    "items": [{
        "id" : 1,
        "titulo": "Top Gun",
        "tipo": "filme",
        "ano": 1986,
        "generos": ["Ação"],
        "nota": 7,
        "assistido": true
    },
    {
        "id" : 2,
        "titulo": "Como treinar o seu dragão:",
        "tipo": "filme",
        "ano": 2009,
        "generos": ["ficção"],
        "nota": 9.9,
        "assistido": true
    },
    {
        "id" : 3,
        "titulo": "Breaking Bad",
        "tipo": "serie",
        "ano": 2009,
        "generos": ["crime", "drama"],
        "nota": 10,
        "assistido": false
    },
    {
        "id" : 4,
        "titulo": "Dexter",
        "tipo": "serie",
        "ano": 2006,
        "generos": ["crime", "suspense", "drama"],
        "nota": 9.7,
        "assistido": true
    },
    {
        "id" : 5,
        "titulo": "The Boys",
        "tipo": "serie",
        "ano": 2019,
        "generos": ["herói", "suspense", "drama"],
        "nota": 8.6,
        "assistido": false
    },
    {
        "id": 6,
        "titulo": "Stranger Things",
        "tipo": "serie",
        "ano": 2016,
        "generos": ["terror", "drama"],
        "nota": 8.9,
        "assistido": false
    }
    ]

}
console.log(catalogo)

for(let i = 0; i<catalogo.items.length; i++)
{
    if(i == 0)
    {
        console.log(catalogo.items[i].titulo)
    }
    
    if( i == catalogo.items.length-1)
    {
        console.log(catalogo.items[i].ano)
    }
    
    if(i == 2 )
    {
        if(catalogo.items[i].generos[1] === undefined)
        {
            console.log("Não existe segundo gênero")
        }
        else
        {
            console.log(catalogo.items[i].generos[1])
        }
    }

    
}

var total = catalogo.items.length;
var divOutput = document.getElementById("output");
var contserie = 0;
var contfilme = 0;
var naoAssis = 0;
var media;
var nota = 0;


for(let i = 0; i<catalogo.items.length; i++)
{
    if(catalogo.items[i].tipo == "filme")
    {
        contfilme++;
    }
    else
    {
        contserie++;
    }

    if(catalogo.items[i].assistido == false)
    {
        naoAssis++;
    }

    nota += catalogo.items[i].nota;
}


media = nota/catalogo.items.length;

divOutput.innerHTML += "<a>Total de Itens no Catálogo: </a> "+total+"<br><a>Filmes: </a>"+contfilme+"<br><a>Séries: </a>"+contserie+"<br><a>Não Assistidos: </a>"+naoAssis+"<br>Média das notas: "+media;


var notas = new Array(catalogo.items.length);
var titulos = new Array(catalogo.items.length);

for(let i = 0; i < catalogo.items.length; i++)
{
    notas[i] = catalogo.items[i].nota;
    titulos[i] = catalogo.items[i].titulo;
}


for(let i = 0; i < catalogo.items.length; i++)
{
    for(let j = i + 1; j < catalogo.items.length; j++)
    {
        if(notas[j] > notas[i])
        {
            
            var tempNota = notas[i];
            notas[i] = notas[j];
            notas[j] = tempNota;

           
            var tempTitulo = titulos[i];
            titulos[i] = titulos[j];
            titulos[j] = tempTitulo;
        }
    }
}

divOutput.innerHTML +="<h3>Ranking:</h3>";
divOutput.innerHTML +="Titulo 1: "+titulos[0]+" Nota: "+notas[0]+"<br>";
divOutput.innerHTML +="Titulo 2: "+titulos[1]+" Nota: "+notas[1]+"<br>";
divOutput.innerHTML +="Titulo 3: "+titulos[2]+" Nota: "+notas[2]+"<br>";

console.log("- Lista do Catalogo: -")
for(let i = 0; i < catalogo.items.length; i++)
{
    console.log(catalogo.items[i].titulo)
}
console.log("Media: "+media)
}





