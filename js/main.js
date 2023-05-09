// CRIANDO UM NOVO ITEM
// const form = document.getElementById("novoItem");

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault()

//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     criaElemento(nome.value, quantidade.value); //////// toda vez que o formulario for submetido a funcao criaElemento vai chamar passando os dois parametros de busca////////

//     nome.value = "";
//     quantidade.value = "";
// })

////// criando elemento atarves da funcao //////
// function criaElemento(nome, quantidade) {
//     console.log(nome);
//     console.log(quantidade);

// // //<li class="item"><strong>7</strong>Camisas</li>
//     const novoItem = document.createElement('li');  ////// criando um novo item a const novoItem ta recebendo o li criado!////
//     novoItem.classList.add("item"); ////// adicionando a classe item!!//////

//     const numeroItem = document.createElement('strong');  ////// criando a tag strong!//////
//     numeroItem.innerHTML = quantidade;  ////// fazendo com que a tag strong receba a quantidade inserida ////// 

//     console.log(numeroItem);

//     novoItem.appendChild(numeroItem); //// usando a operacao appendChild que vai inserir um elemento criado dentro do outro//////
//     novoItem.innerHTML += nome; //// incrementando o nome no elemento novoItem 
//     console.log(novoItem);

// // //  adicionando elemento na pagina
//     const lista = document.getElementById('lista');  // // // acessando o id lista do formulario // // // 
//     lista.appendChild(novoItem); ////const lista vai receber o novoItem completo atraves do appendChild //////
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // codigo limpo capturando os dados da tela

// const form = document.getElementById("novoItem");
// const lista = document.getElementById('lista');

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault()

//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     criaElemento(nome.value, quantidade.value);

//     nome.value = "";
//     quantidade.value = "";
// })

// function criaElemento(nome, quantidade) {
//     const novoItem = document.createElement('li');
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement('strong');
//     numeroItem.innerHTML = quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += nome;
    
//     lista.appendChild(novoItem);
// }





// // // // // // armazenando dados na WEB  // // // // // //

// const form = document.getElementById("novoItem");
// const lista = document.getElementById('lista');
// const itens = []; 

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault()

//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     criaElemento(nome.value, quantidade.value);

//     nome.value = "";
//     quantidade.value = "";
// })

// function criaElemento(nome, quantidade) {
//     const novoItem = document.createElement('li');
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement('strong');
//     numeroItem.innerHTML = quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += nome;
    
//     lista.appendChild(novoItem);

//     const itemAtual = {
//         "nome": nome,
//         "quantidade": quantidade
//     }

//     itens.push(itemAtual);
//     localStorage.setItem("item", JSON.stringify(itens));  // metodo JSON.stringify para transformar os dados manipulados em strings
// };

// metodos do localStorage para manipular os dados armazenados
// localStorage.clear(), 
// localStorage.setItem(), 
// localStorage.removeItem(), 
// localStorage.getItem(), 
// localStorage.length(), 
// localStorage.key().






// // // // // // CONSULTANDO DADOS DO LOCALSTORAGE  // // // // // //
// // // // // // REFATORANDO CODIGO  // // // // // //
// const form = document.getElementById("novoItem");
// const lista = document.getElementById('lista');
// const itens = JSON.parse(localStorage.getItem("itens")) || []; 


// itens.forEach( (elemento) => {
//     criaElemento(elemento)
// })


// form.addEventListener("submit", (evento) => {
//     evento.preventDefault()

//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     const itemAtual = {
//         "nome": nome.value,
//         "quantidade": quantidade.value
//     }

//     criaElemento(itemAtual);

//     itens.push(itemAtual);

//     localStorage.setItem("itens", JSON.stringify(itens));

//     nome.value = "";
//     quantidade.value = "";
// })

// function criaElemento(item) {
//     const novoItem = document.createElement('li');
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement('strong');
//     numeroItem.innerHTML = item.quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += item.nome;
    
//     lista.appendChild(novoItem);

// };





// // // // // // ATUALIZANDO ITEM  // // // // // //


// const form = document.getElementById("novoItem");
// const lista = document.getElementById('lista');
// const itens = JSON.parse(localStorage.getItem("itens")) || []; 

// itens.forEach( (elemento) => {
//     criaElemento(elemento)
// })

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault()

//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     const existe = itens.find( elemento => elemento.nome === nome.value);
    
//     const itemAtual = {
//         "nome": nome.value,
//         "quantidade": quantidade.value
//     }

//     if(existe) {
//         itemAtual.id = existe.id;
//         atualizaElemento(itemAtual);
//         itens[existe.id] = itemAtual;
//     } else {
//         itemAtual.id = itens.length;
//         criaElemento(itemAtual);
//         itens.push(itemAtual);
//     }

//     localStorage.setItem("itens", JSON.stringify(itens));

//     nome.value = "";
//     quantidade.value = "";
// })

// function criaElemento(item) {
//     const novoItem = document.createElement('li');
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement('strong');
//     numeroItem.innerHTML = item.quantidade;
//     numeroItem.dataset.id = item.id;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += item.nome;
    
//     lista.appendChild(novoItem);

// };

// function atualizaElemento(item) {
//     document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
// }






// // // // // // REMOVENDO ITEM  // // // // // //

const form = document.getElementById("novoItem");
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem("itens")) || []; 

itens.forEach( (elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find( elemento => elemento.nome === nome.value);
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe) {
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);

        itens[itens.findIndex( elemento => elemento.id === existe.id )] = itemAtual;
    } else {
        itemAtual.id = itens[itens.length-1] ? (itens[itens.length-1]).id + 1 : 0;

        criaElemento(itemAtual);

        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta(item.id));
    
    lista.appendChild(novoItem);
};

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerText = "X";

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id);
    })

    return elementoBotao;
}

function deletaElemento(tag, id) {
    tag.remove();


    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens));
    console.log(itens)
}



