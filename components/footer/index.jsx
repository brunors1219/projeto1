import Styles from "./footer.module.scss"
import Image from "next/image";
import Logo from "/public/img/logo.png"
const Footer = () => {
    return (
        <div className={Styles.container}>

            <div className={Styles.column}>
                <Image src={Logo} alt="Logotipo" />
                <h1>0800 900 300</h1>
                <p>relatinvest@empresa.com.br</p>
            </div>

            <div className={Styles.column}>
                <h1>Menu</h1>
                <p>Bem vindo</p>
                <p>Objetivo</p>
            </div>

            <div className={Styles.column}>
                <h1>CONTEÚDO</h1>
                <p>Relatorios antigos </p>
            </div>

            <div className={Styles.column}>
                <h1>SOCIAL</h1>
                
            </div>

        </div>
    );
};

export default Footer;