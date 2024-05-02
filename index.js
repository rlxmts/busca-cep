const botao = document.querySelector('[data-botao]');
const container = document.querySelector('.container');


botao.addEventListener('click', (e)=>{

    const paragrafo = document.createElement('p');
    paragrafo.textContent = 'Parece que o cep é invalido.';

    e.preventDefault();
    const campoCep = document.querySelector('[data-campo-cep]').value;
    const cep = campoCep.replace('-', '');

    if(cep != '' && cep.length == 8){
        buscarCep(cep);
    }else{
        container.appendChild(paragrafo);
        return;
    }

});

async function buscarCep(cep){
    try{
        const api = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const apiConvertida = await api.json();  
        
        criarCard(apiConvertida.logradouro, apiConvertida.bairro, apiConvertida.localidade, apiConvertida.ddd, apiConvertida.uf);

    }catch(error){
        container.innerHTML += `<p>Parece que houve um erro:${error}.</p>`
    }
}

function criarCard(rua, bairro, cidade, ddd, uf){
    const div = document.createElement('div');
    div.classList.add('resultado');
    const ul = document.createElement('ul');
    const botao = document.createElement('button');
    botao.textContent = 'Fazer nova busca';
    ul.innerHTML = `
        <h3>Informações:</h3>
        <li class="item-resultado">Rua: ${rua}</li>
        <li class="item-resultado">Bairro: ${bairro}</li>
        <li class="item-resultado">Cidade: ${cidade}</li>
        <li class="item-resultado">Estado: ${uf}</li>
        <li class="item-resultado">DDD: ${ddd}</li>
        `
    div.appendChild(ul);
    div.appendChild(botao)
    container.appendChild(div);
}

