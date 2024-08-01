import Styles from "./welcome.module.scss";
import Image from "next/image";
import Banner from "/public/img/banner.png"

const Welcome = () => {
    return (
        <div id="welcome" className={Styles.container}>

            <div className={Styles.text}>
                <h1>Melhor site para seu investimento</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere ipsum recusandae eius voluptas inventore distinctio velit quia animi earum odio vel veritatis, dicta delectus alias possimus eligendi voluptatem necessitatibus!</p>
            </div>

            <div className={Styles.image}>
                <Image src={Banner} alt="Mão segundo relatorio" />
            </div>
        </div>
    );
};

export default Welcome;