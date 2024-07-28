import Input from "../input";
import Select from "../select";
import Styles from "./contato.module.scss";

//Formulario de contato
const Contato = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.text}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumenta sua lucratividade</h1>
                <p>Lorem ipsum dolor, adipisci qui voluptas officiis maiores aspernatur! Pariatur, possimus!</p>
            </div>

            <div className={Styles.form}>
                <h1>Fale com um especialista</h1>
                
                <form action="">
                    <Input type="text" placeholder="Nome" required/>
                    <Input type="date" placeholder="Data nacimento" required/>
                    <Input type="email" placeholder="Email" required/>
                    <Input type="text"
                    placeholder="Numero Whatsapp"  
                    pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                    required/>

                    <Select placeholder="Escolha tipo de invenstimento" option=
                    {[
                    {label: "Ações", valeu: "ações"},
                    {label: "ETF", valeu: "ETFs"},
                    {label: "Fundos", valeu: "Fundos imboliario"},
                    {label: "Renda Fixa", valeu: "Renda Fixa"}

                    ]} required/>
                    
                    <button className={Styles.button}>Enviar</button>
                </form>


            </div>


        </div>
    );

};
export default Contato;