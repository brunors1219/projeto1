import Styles from "./footer.module.scss"
import Image from "next/image";
import Logo from "/public/img/logo.png"
import Facebook from "/public/img/facebook.png";
import Instagram from "/public/img/instagram.png";
import Linkedin from "/public/img/linkedin.png";
import Link from "next/link";


const Footer = () => {
    return (
        <div className={Styles.container}>

            <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
                <Image className={Styles.logo} src={Logo} alt="Logotipo" />
                <h1 className={Styles.title}>0800 900 300</h1>
                <p>relatinvest@empresa.com.br</p>
            </div>

            <div className={Styles.column}>
                <h1>Menu</h1>
                <Link><p>Bem vindo </p></Link>
                <Link><p>Objetivo</p></Link>
            </div>

            <div className={Styles.column}>
                <h1> Redes Social</h1>
                <div className={Styles.icons}>
                    <Link href="/"><Image src={Facebook} alt="facebook" className={Styles.icon} /></Link>
                    <Link href="/"><Image src={Instagram} alt="instagram" className={Styles.icon} /></Link>
                    <Link href="/"><Image src={Linkedin} alt="linkedin" className={Styles.icon} /></Link>
                </div>
            </div>
            <div className={Styles.allRightReserved}>©2024 InvestM - Todos os direitos reservados.</div>

        </div>
    );
};

export default Footer;