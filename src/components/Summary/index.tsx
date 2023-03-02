import { Container } from "./styles";
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';

export function Summary() {
    return (

        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                    <strong>R$ 1000,00</strong>
                </header>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saídas" />
                    <strong>R$ - 500,00</strong>
                </header>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                    <strong>R$ 500,00</strong>
                </header>
            </div>
            
            
        </Container>
    )

}