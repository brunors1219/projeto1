import Image from "next/image";
import logo from "/public/img/logo.png";
import Link from "next/link";
import Styles from "./header.module.scss";

const Header = () => {
    return <div className={Styles.conteiner}>
        <div className={Styles.logo}>
            <Link href="/"><Image src={logo} alt="logotipo"/></Link>
        </div>
        <div className={Styles.menu}>
            <Link href="/">Home</Link>
            <Link href="/">Empresa</Link>
            <Link href="/">Contato</Link>
        </div>
    </div>;
}

export default Header;