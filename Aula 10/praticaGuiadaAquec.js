// Prática guiada playground 
/* 1. Crie uma variável produtos, que contenha um array de objetos, com no
mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os
seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do
Produto e Status. */

const produtos = [
    {nome:'ps4', valor:2400, qualidade:9, status:false},
    {nome:'xbox one', valor:1500, qualidade:9, status:true},
    {nome:'headset', valor:500, qualidade:7, status:true},
    {nome:'switch', valor:2000, qualidade:5, status:false},
    {nome:'N64', valor:300, qualidade:3, status:true},
]

/* 2. Em seguida, um usuário deseja filtrar os produtos, com base em alguns
critérios. Selecione todos os produtos que tenham:
Valor entre 482 e 1600;
Qualidade superior a 60;
Status como disponível.
O resultado do filtro deve ser armazenado na variável carrinho. */

const carrinho = produtos.filter(element => {
    const valor = element.valor 
    const qualidade = element.qualidade > 6
    const status = element.status

    const resultado = (valor >= 482 && valor <= 1600)&&(qualidade > 6)&&(status == true) 
    return resultado
})

/* 3. Por fim, é necessário exibir todos os itens presentes no carrinho, com seus
nomes e preços correspondentes, e no final um valor total, resultante da
somatória de todos os produtos. */

carrinho.forEach(produto =>{
    console.log(`Valor: ${produto.valor}`)
} )