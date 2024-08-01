import { PatternFormat } from 'react-number-format';
import Input from "../input";
import Select from "../select";
import Styles from "./contato.module.scss";


//Formulario de contato
const Contato = () => {

    return (
        <div id="contato" className={Styles.container}>
            <div className={Styles.text}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumenta sua lucratividade</h1>
                <p>Lorem ipsum dolor, adipisci qui voluptas officiis maiores aspernatur! Pariatur, possimus!</p>
            </div>

            <div className={Styles.form}>
                <h1>Fale com um especialista</h1>
                
                <form action="https://formsubmit.co/bww963w@gmail.com" method="POST">
                    <Input type="text" name="nome" placeholder="Nome" required/>
                    <Input type="email" name="email" placeholder="Email"  required/>
                    <Input type="number" name= "Numero Whatsapp"
                    placeholder="telefone"  
                    PatternFormat
                    required/>

                    <Select type="text" name= "Seleciona investimento" placeholder="Escolha tipo de invenstimento" option=
                    {[
                    {label: "Ações", valeu: "ações"},
                    {label: "ETF", valeu: "ETFs"},
                    {label: "Fundos", valeu: "Fundos imboliario"},
                    {label: "Renda Fixa", valeu: "Renda Fixa"}

                    ]} required/>
                    
                    <button className={Styles.button}>Enviar</button>
                </form>
                

            </div>

            <div className={Styles.footer}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        <span> Corporis debitis sapiente a.</span></p>
            </div>
        </div>
    );

};
export default Contato;