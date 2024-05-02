<h1>Busca CEP - Desenvolvido por Matheus Cruz</h1>

<h3>Olá! Tudo certo? Espero que sim!:D </h3>
<div>
  <p>Esse é um projeto independente que fiz para praticar consulmo de API e manipulação do DOM.</p><br>
  <ul>
    <h4>Como o projeto doi desenvolvido:</h4>
    <li>Primeiro: eu optei por usar o método replace() do JavaScript para remover o ' - ' antes de enviar o valor do input para o função que realiza a busca do cep.</li>
    <li>Segundo: Antes de chamar a função que faz a busca na api usei condicionais para saber se o valor do campo CEP era válido. Para isso estipulei que o valor do campo não poderiar ser vazio e o tamanho (length) deveria ser igual a 8 porque ja viria tratado sem o '-'.</li>
    <li>Terceiro: Fiz a função assíncrona que de fato faz a busca na API. Para essa função usei  'try' e o 'catch' para tratamento de erros enviando uma resposta visual para cada caso.</li> 
    <li>Quarto: Criei separado a função responsavel para criar o card de resposta que recebe como parametro a resposta da requisição ja tratada. Use o appendChild e o creatElement para montar o card e gerar um resposta visual no DOM a resposta da API.</li> 
  </ul>   
  <p>Que tal dar uma olhadinha nesse projeto? Segue o link: https://rlxmts.github.io/busca-cep/</p>
  <br><br><br><br>
  <img src="https://github.com/rlxmts/busca-cep/assets/165737916/2c050462-5223-4d94-985f-a919e0e67bd6">
</div>


<br>
<div>
  <h4>Tecnologias ultilizadas:</h4>
   <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg">
   <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg">
   <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg">
</div>
