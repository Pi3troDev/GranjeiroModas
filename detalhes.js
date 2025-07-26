const produtos = [
  {
    id: "1",
    nome: "Blusa Trico Modal",
    img: "./img/modelo1.jpeg",
    preco: "R$ 89,90",
    precoAntigo: "R$ 109,90",
    tecido: "Tricô Modal confortável",
    tamanhos: ["P", "M", "G", "GG"],
    whatsapp: "5519981227305"
  },
  {
    id: "2",
    nome: "Cardigan",
    img: "./img/modelo2.jpeg",
    preco: "R$ 109,90",
    precoAntigo: "R$ 120,90",
    tecido: "Malha leve",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "3",
    nome: "Conjunto Tweed",
    img: "./img/modelo3.jpeg",
    preco: "R$ 199,90",
    precoAntigo: "R$ 229,90",
    tecido: "Tweed elegante",
    tamanhos: ["M", "G", "GG"],
    whatsapp: "5519981227305"
  },
  {
    id: "4",
    nome: "Vestido Isa",
    img: "./img/modelo4.jpeg",
    preco: "R$ 89,90",
    precoAntigo: "R$ 99,99",
    tecido: "Algodão macio",
    tamanhos: ["P", "M"],
    whatsapp: "5519981227305"
  },
  {
    id: "5",
    nome: "Vestido Eliza",
    img: "./img/modelo5.jpeg",
    preco: "R$ 159,90",
    precoAntigo: "R$ 189,90",
    tecido: "Viscose leve",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "6",
    nome: "Vestido Gigi",
    img: "./img/modelo6.jpeg",
    preco: "R$ 99,90",
    precoAntigo: "R$ 115,90",
    tecido: "Malha confortável",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "7",
    nome: "Conjunto Tweed",
    img: "./img/modelo7.jpeg",
    preco: "R$ 199,99",
    precoAntigo: "R$ 229,99",
    tecido: "Tweed clássico",
    tamanhos: ["M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "8",
    nome: "Saia",
    img: "./img/modelo8.jpeg",
    preco: "R$ 159,90",
    precoAntigo: "R$ 179,90",
    tecido: "Tecido leve e confortável",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "9",
    nome: "Saia",
    img: "./img/modelo9.jpeg",
    preco: "R$ 159,90",
    precoAntigo: "R$ 165,99",
    tecido: "Tecido premium",
    tamanhos: ["P", "M"],
    whatsapp: "5519981227305"
  },
  {
    id: "10",
    nome: "Vestido Tati",
    img: "./img/modelo10.jpeg",
    preco: "R$ 169,90",
    precoAntigo: "R$ 199,90",
    tecido: "Tecido confortável e elegante",
    tamanhos: ["P", "M", "G", "GG"],
    whatsapp: "5519981227305"
  },
  {
    id: "11",
    nome: "Camisa em Lese",
    img: "./img/modelo11.jpeg",
    preco: "R$ 79,90",
    precoAntigo: "R$ 100,90",
    tecido: "Lese leve e fresca",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "12",
    nome: "Jaqueta Peluciada",
    img: "./img/modelo12.jpeg",
    preco: "R$ 199,90",
    precoAntigo: "R$ 220,00",
    tecido: "Pelúcia macia",
    tamanhos: ["M", "G", "GG"],
    whatsapp: "5519981227305"
  },
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
    tecido: "Viscose leve",
    tamanhos: ["P", "M", "G", "GG"],
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
    img: "./img/modelo17.jpeg",
    preco: "R$ 139,90",
    precoAntigo: "R$ 199,90",
    tecido: "Satinado plissado",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "18",
    nome: "Vestido Ruth",
    img: "./img/modelo18.jpeg",
    preco: "R$ 179,90",
    precoAntigo: "R$ 199,90",
    tecido: "Tecido nobre",
    tamanhos: ["M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "19",
    nome: "Jaqueta Peluciada",
    img: "./img/modelo19.jpeg",
    preco: "R$ 199,90",
    precoAntigo: "R$ 220,00",
    tecido: "Pelúcia macia",
    tamanhos: ["M", "G", "GG"],
    whatsapp: "5519981227305"
  },
  {
    id: "20",
    nome: "Vestido Gigi",
    img: "./img/modelo20.jpeg",
    preco: "R$ 99,90",
    precoAntigo: "R$ 119,90",
    tecido: "Malha confortável",
    tamanhos: ["P", "M", "G"],
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
    nome: "Blusa Tricô Modal",
    img: "./img/modelo22.jpeg",
    preco: "R$ 89,90",
    precoAntigo: "R$ 109,90",
    tecido: "Tricô modal confortável",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "23",
    nome: "Cardigan",
    img: "./img/modelo23.jpeg",
    preco: "R$ 109,90",
    precoAntigo: "R$ 120,90",
    tecido: "Malha leve",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  },
  {
    id: "24",
    nome: "Cardigan",
    img: "./img/modelo24.jpeg",
    preco: "R$ 109,90",
    precoAntigo: "R$ 120,90",
    tecido: "Malha leve",
    tamanhos: ["P", "M", "G"],
    whatsapp: "5519981227305"
  }
];


// Função para pegar o parâmetro id da URL
function pegarIdUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Função que monta o HTML de detalhes do produto
function montarDetalhes(produto) {
  const linkWhats = `https://wa.me/${produto.whatsapp}?text=Olá!%20Tenho%20interesse%20no%20produto:%20${encodeURIComponent(produto.nome)}`;
  return `
    <img src="${produto.img}" alt="${produto.nome}" />
    <h2>${produto.nome}</h2>
    <p class="price">${produto.preco} <span>${produto.precoAntigo}</span></p>
    <p><strong>Tecido:</strong> ${produto.tecido}</p>
    <div class="tamanhos">
      ${produto.tamanhos.map(t => `<span>${t}</span>`).join('')}
    </div>
    <a href="${linkWhats}" target="_blank" class="btn">Comprar agora pelo WhatsApp</a>
  `;
}

// Função principal que carrega os detalhes
function carregarDetalhes() {
  const id = pegarIdUrl();
  const produto = produtos.find(p => p.id === id);

  const container = document.getElementById("detalhes-produto");

  if (!produto) {
    container.innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  container.innerHTML = montarDetalhes(produto);
}

// Executa quando a página carregar
window.addEventListener("DOMContentLoaded", carregarDetalhes);
