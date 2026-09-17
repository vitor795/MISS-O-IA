const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual destas ações é fundamental para garantir o bom funcionamento e a eficiência do sistema de saúde pública?
",
        alternativas: [
            {
                texto: "Quais das afirmações a seguir representam princípios fundamentais da saúde pública no Brasil?
.",
                afirmacao: "A Universalidade estabelece a saúde como direito de todos e dever do Estado. A Equidade complementa esse conceito ao reconhecer que, para tratar todos de forma justa, é preciso tratar de maneira diferenciada quem possui maior vulnerabilidade social e sanitária.
."
            },
            {
                texto:  "Quais das opções abaixo descrevem áreas de atuação essenciais da Vigilância em Saúde Pública para prevenir epidemias e proteger a população?
.",
                afirmacao: "A Vigilância Epidemiológica atua no monitoramento direto da circulação de vírus, bactérias e outras ameaças infecciosas. Já a Vigilância Sanitária intervém nos fatores ambientais, comerciais e fabris que podem comprometer a segurança da saúde coletiva.
."
            }    
           
        ]
    },
    {
       
            enunciado: "Enfrentamento de Surtos e Falta de Saneamento Básico",
            alternativas: [
                {
                    texto: "Em um município de baixa renda com alto índice de contaminação por doenças associadas à ausência de saneamento básico (como dengue, leptospirose e verminoses), qual deve ser a estratégia de intervenção priorizada pela gestão municipal?",
                    afirmacao: " Fortalecer a atuação imediata dos Agentes Comunitários de Saúde (ACS) e dos Agentes de Combate às Endemias (ACE), promovendo mutirões de conscientização, eliminação de focos de contaminação e distribuição direta de insumos de proteção à população."
                },
                {
                    texto:  "Articular investimentos e parcerias para obras públicas de grande porte voltadas ao saneamento básico, canalização de esgoto e drenagem urbana nas áreas periféricas.",
                    afirmacao: "Você é uma pessoa que dá ênfase em priorizar os recursos disponíveis, pensando no meio ambiente e sem descartar o viés econômico."
                }    
               
            ]
        },
        {
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
               
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
                }    
               
            ]
        },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();