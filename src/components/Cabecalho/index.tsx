import Casa from '../../assets/casa.svg';
import Mensagem from '../../assets/mensagem.svg';
import CabecalhoPrincipal from '../../assets/cabecalho-fundo-principal.svg';
import CabecalhoLinha from '../../assets/cabecalho-fundo-linha.svg';
import './style.css';

function Cabecalho(){
  return (
    <div className="cabecalho-principal">
      <img src={CabecalhoPrincipal} className="fundo-principal" alt="Fundo Cabeçalho Principal"/>
      <img src={CabecalhoLinha} className="fundo-principal" alt="Fundo Cabeçalho Linha"/>
      <img src={Casa} className="botao-casa" alt="Botão para Home"/>
      <img src={Mensagem} className="botao-mensagem" alt="Botão com simbolo de Mensagens"/>
    </div>
  )
}
export default Cabecalho;