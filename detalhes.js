const produtos = [
  {
    id: "1",
    nome: "Vestido Cloe",
    imagens: ["./img/modelo1.jpeg", "./img/modelo2.jpeg", "./img/modelo3.jpeg", "./img/modelo4.jpeg"],
    preco: "R$ 155,90",
    precoAntigo: "R$ 189,90",
    tecido: "Viscolinho, forrado",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "2",
    nome: "Vestido Rayssa",
    imagens: ["./img/modelo5.jpeg", "./img/modelo6.jpeg"],
    preco: "R$ 155,90",
    precoAntigo: "R$ 189,90",
    tecido: "Viscolinho, busto regulável",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "3",
    nome: "Vestido Júlia",
    imagens: ["./img/modelo7.jpeg", "./img/modelo8.jpeg", "./img/modelo9.jpeg", "./img/modelo10.jpeg"],
    preco: "R$ 155,90",
    precoAntigo: "R$ 189,90",
    tecido: "Viscolinho, transpassado no busto, lastex nas costas e bolso",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "4",
    nome: "Vestido Flavi",
    imagens: ["./img/modelo12.jpeg", "./img/modelo13.jpeg", "./img/modelo14.jpeg", "./img/modelo15.jpeg"],
    preco: "R$ 169,90",
    precoAntigo: "R$ 199,99",
    tecido: "Linho, acompanha faixa cinto, lastex nas costas, bojo e forrado",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "5",
    nome: "Chamise Monick",
    imagens: ["./img/modelo16.jpeg", "./img/modelo17.jpeg", "./img/modelo18.jpeg", "./img/modelo28.jpeg"],
    preco: "R$ 159,90",
    precoAntigo: "R$ 199,90",
    tecido: "Alfaitaria marrant, botões funcionais",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "6",
    nome: "Vestido Bia",
    imagens: ["./img/modelo19.jpeg", "./img/modelo20.jpeg", "./img/modelo21.jpeg", "./img/modelo22.jpeg"],
    preco: "R$ 160,00",
    precoAntigo: "R$ 179,90",
    tecido: "Duna premium, forrado, tem bojo, lastex nas costas",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "7",
    nome: "Vestido Sara",
    imagens: ["./img/modelo24.jpeg", "./img/modelo23.jpeg", "./img/modelo25.jpeg", "./img/modelo26.jpeg", "./img/modelo27.jpeg", "./img/modelo29.jpeg"],
    preco: "R$ 160,00",
    precoAntigo: "R$ 180,00",
    tecido: "Marrant sensorial, forrado, tem bojo, acompanha faixa cinto, botões funcionais",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "8",
    nome: "Tshirt em Algodão",
    imagens: ["./img/modelo38.jpeg", "./img/modelo39.jpeg", "./img/modelo40.jpeg", "./img/modelo41.jpeg"],
    preco: "R$ 39,90",
    precoAntigo: "R$ 69,90",
    tecido: "Algodão",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "9",
    nome: "Tshirt em Algodão",
    imagens: ["./img/modelo42.jpeg", "./img/modelo43.jpeg", "./img/modelo44.jpeg", "./img/modelo49.jpeg"],
    preco: "R$ 39,90",
    precoAntigo: "R$ 69,90",
    tecido: "Algodão",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "10",
    nome: "Tshirt",
    imagens: ["./img/modelo45.jpeg", "./img/modelo46.jpeg", "./img/modelo47.jpeg", "./img/modelo48.jpeg", "./img/modelo50.jpeg", "./img/modelo51.jpeg"],
    preco: "R$ 39,90",
    precoAntigo: "R$ 69,90",
    tecido: "Algodão",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "11",
    nome: "Vestido Rebeca",
    imagens: ["./img/modelo37.jpeg", "./img/modelo36.jpeg", "./img/modelo35.jpeg", "./img/modelo34.jpeg"],
    preco: "R$ 130,00",
    precoAntigo: "R$ 170,00",
    tecido: "Duna, forrado, lastex nas costas",
    tamanhos: ["G2"],
    whatsapp: "5519981227305"
  },
  {
    id: "12",
    nome: "Vestido Larissa",
    imagens: ["./img/modelo33.jpeg", "./img/modelo32.jpeg", "./img/modelo31.jpeg", "./img/modelo30.jpeg"],
    preco: "R$ 159,90",
    precoAntigo: "R$ 199,90",
    tecido: "Viscolinho, forrado, lastex nas costas comprimento longo",
    tamanhos: ["G2"],
    whatsapp: "5519981227305"
  },

  /*
  {
    id: "13",
    nome: "Saia Alfaitaria",
    img: "./img/modelo13.jpeg",
    preco: "R$ 139,90",
    precoAntigo: "R$ 159,90",
    tecido: "Alfaitaria sofisticada",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "14",
    nome: "Vestido Isa Canelado",
    img: "./img/modelo14.jpeg",
    preco: "R$ 89,90",
    precoAntigo: "R$ 99,90",
    tecido: "Malha canelada confortável",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "15",
    nome: "Vestido Ellen",
    img: "./img/modelo15.jpeg",
    preco: "R$ 169,90",
    precoAntigo: "R$ 199,90",
    tecido: "Tecido lanzinha acompanha faixa",
    tamanhos: ["M"],
    whatsapp: "5519981227305"
  },
  {
    id: "16",
    nome: "Vestido Isa",
    img: "./img/modelo16.jpeg",
    preco: "R$ 89,90",
    precoAntigo: "R$ 99,90",
    tecido: "Algodão macio",
    tamanhos: ["P", "M"],
    whatsapp: "5519981227305"
  },
  {
    id: "17",
    nome: "Saia Plissada Acetinada",
    imagens: ["./img/modelo17.jpeg", "./img/modelo26.jpeg", "./img/modelo27.jpeg", "./img/modelo28.jpeg"], 
    preco: "R$ 139,90",
    precoAntigo: "R$ 199,90",
    tecido: "Comprimento mídi lastex na cintura",
    tamanhos: ["M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "18",
    nome: "Vestido Ruth",
    img: "./img/modelo18.jpeg",
    preco: "R$ 179,90",
    precoAntigo: "R$ 199,90",
    tecido: "Tecido linho, botões funcionais",
    tamanhos: ["G"],
    whatsapp: "5519981227305"
  },
  {
    id: "19",
    nome: "Jaqueta Peluciada",
    img: "./img/modelo19.jpeg",
    preco: "R$ 199,90",
    precoAntigo: "R$ 220,00",
    tecido: "Pelúcia macia",
    tamanhos: ["P"],
    whatsapp: "5519981227305"
  },
  {
    id: "20",
    nome: "Vestido Chamise Fran",
    imagens: ["./img/modelo30.jpeg", "./img/modelo31.jpeg"],
    preco: "R$ 189,90",
    precoAntigo: "R$ 220,90",
    tecido: "Tecido viscolinho, acompanha faixa, botões funcionais",
    tamanhos: ["G2"],
    whatsapp: "5519981227305"
  },
  {
    id: "21",
    nome: "Vestido Tati",
    img: "./img/modelo21.jpeg",
    preco: "R$ 169,90",
    precoAntigo: "R$ 199,90",
    tecido: "Tecido confortável e elegante",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "22",
    nome: "Vestido Lídia",
    imagens: ["./img/modelo35.jpeg", "./img/modelo36.jpeg"],
    preco: "R$ 89,90",
    precoAntigo: "R$ 109,90",
    tecido: "Tecido viscolinho, lastex na cintura",
    tamanhos: ["G2"],
    whatsapp: "5519981227305"
  },
  {
    id: "23",
    nome: "Vestido Vitória",
    imagens: ["./img/modelo32.jpeg", "./img/modelo33.jpeg"],
    preco: "R$ 150,00",
    precoAntigo: "R$ 180,00",
    tecido: "Tecido viscolinho, lastex na cintura",
    tamanhos: ["G1"],
    whatsapp: "5519981227305"
  },
  {
    id: "24",
    nome: "Vestido Carol",
    img: "./img/modelo34.jpeg",
    preco: "R$ 179,90",
    precoAntigo: "R$ 199,90",
    tecido: "Tecido moletinho",
    tamanhos: ["G1"],
    whatsapp: "5519981227305"
  }
    */
];


// Controle do carrossel
let indiceImagemAtual = 0;
let imagensProduto = [];

// Pega o ID da URL
function pegarIdUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Gera o HTML do produto
function montarDetalhes(produto) {
  const linkWhats = `https://wa.me/${produto.whatsapp}?text=Olá!%20Tenho%20interesse%20no%20produto:%20${encodeURIComponent(produto.nome)}`;

  // Carrossel se houver várias imagens
  const imagensHTML = produto.imagens
    ? `
      <div class="carrossel">
        <button class="seta esquerda" onclick="mudarImagem(-1)">❮</button>
        <img id="carrossel-img" src="${produto.imagens[0]}" alt="${produto.nome}" />
        <button class="seta direita" onclick="mudarImagem(1)">❯</button>
      </div>
    `
    : `<img src="${produto.img}" alt="${produto.nome}" />`;

  return `
    ${imagensHTML}
    <h2>${produto.nome}</h2>
    <p class="price">${produto.preco} <span>${produto.precoAntigo}</span></p>
    <p><strong>Tecido:</strong> ${produto.tecido}</p>
    <div class="tamanhos">
      ${produto.tamanhos.map(t => `<span>${t}</span>`).join('')}
    </div>
    <a href="${linkWhats}" target="_blank" class="btn">Comprar agora pelo WhatsApp</a>
  `;
}

// Carrega os detalhes do produto
function carregarDetalhes() {
  const id = pegarIdUrl();
  const produto = produtos.find(p => p.id === id);

  const container = document.getElementById("detalhes-produto");

  if (!produto) {
    container.innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  if (produto.imagens) {
    imagensProduto = produto.imagens;
  }

  container.innerHTML = montarDetalhes(produto);
}

// Controla a navegação do carrossel
function mudarImagem(direcao) {
  indiceImagemAtual += direcao;

  if (indiceImagemAtual < 0) indiceImagemAtual = imagensProduto.length - 1;
  if (indiceImagemAtual >= imagensProduto.length) indiceImagemAtual = 0;

  const imgElement = document.getElementById("carrossel-img");
  if (imgElement) {
    imgElement.src = imagensProduto[indiceImagemAtual];
  }
}

// Inicia o carregamento ao abrir a página
window.addEventListener("DOMContentLoaded", carregarDetalhes);