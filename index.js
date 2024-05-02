const botao = document.querySelector('[data-botao]');
const container = document.querySelector('.container');
let resultado = [];

botao.addEventListener('click', (e)=>{
    e.preventDefault();
    const campoCep = document.querySelector('[data-campo-cep]').value;
    const cep = campoCep.replace('-', '');

    buscarCep(cep);
});

async function buscarCep(cep){
    try{
        const api = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const apiConvertida = await api.json();  
        resultado = apiConvertida;
        
        criarCard(resultado.logradouro, resultado.bairro, resultado.localidade, resultado.ddd, resultado.uf);

    }catch(error){
        container.innerHTML += `<p>Parece que houve um erro:${error}.</p>`
    }
}

function criarCard(rua, bairro, cidade, ddd, uf){

    container.innerHTML += `
        <p>${rua}</p>
        <p>${bairro}</p>
        <p>${cidade}</p>
        <p>${ddd}</p>
        <p>${uf}</p>
    `
}
