import {useState} from 'react';

const mensagens = [
  "Não há que ser forte. Há que ser flexível.",
  "Nós somos o que pensamos.",
  "A vida trará coisas boas se tiver paciência.",
  "Você é mais forte do que pensa.",
  "A maior de todas as torres começa no solo.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "Siga os bons e aprenda com eles.",
  "Você fará alguém sorrir hoje.",
  "Seu esforço será recompensado.",
  "A sorte está ao seu lado.",
  "A sorte favorece a mente bem preparada.",
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Você é do tamanho do seu sonho.",
  "O amor está sempre mais próximo do que você imagina.",
  "Todas as coisas são difíceis antes de se tornarem fáceis.",
  "Se você se sente só é porque construiu muros ao invés de pontes.",
  "O nosso primeiro e último amor é… o amor-próprio.",
  "Deixe de lado as preocupações e seja feliz.",
  "Você sempre será a sua melhor companhia!"
];

export default function configBiscoito(){
  const [mensagem, mostrarMensagem] = useState('');
  const [quebrar, monstrarBisQuebrado] = useState(false);

  const imagens = {
    biscoitoFechado: require('../assets/biscoitoFechado.png'),
    biscoitoAberto: require('../assets/biscoitoAberto.png'),
  };

  const imagem = quebrar ? imagens.biscoitoAberto : imagens.biscoitoFechado;

  const quebrarBiscoito = () => {
    if(!quebrar){
      const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
      mostrarMensagem(`"${mensagemAleatoria}"`);
      monstrarBisQuebrado(true);
    }
  };

  const reiniciar = () => {
    mostrarMensagem('');
    monstrarBisQuebrado(false);
  };

  return{
    imagem,
    mensagem,
    quebrarBiscoito,
    reiniciar
  };
}