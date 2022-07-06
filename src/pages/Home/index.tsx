import Botao from '../../components/Botao'
import Logo from '../../assets/logo-creme.svg';
import './style.css';

function Home(){
  return (
    <div className="homepage">
      <img src={Logo} className="logo" alt="logo adopet cor creme"/>
      <ul>
      <li><h1>Boas Vindas!</h1></li>
        <li><h2>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</h2></li>
        <li><Botao /></li>
        <li><Botao /></li>
      </ul>
    </div>
  );
}
export default Home;