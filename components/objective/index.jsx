import Style from "./objective.module.scss";
import Image from "next/image";
import Icon1 from "/public/img/iconi.png";
import Icon2 from "/public/img/iconii.png";
import Icon3 from "/public/img/iconiii.png";


const Objective = () => {
    return (
        <div className={Style.container}>
            <h1>Nosso objetivos</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolorum excepturi earum voluptates</p>

            <div className={Style.cards}>

                <div className={Style.card}>
                    <Image src={Icon1} alt="icone" className={Style.icon}/>
                    <h1>Renda fixa</h1>
                    <p>Lorem ipsum, dolor sit tempora doloribus dignissimos non corrupti fuga rerum
                        itaque repellat distinctio odit consequuntur.</p>
                </div>

                <div className={Style.card}>
                    <Image src={Icon2} alt="icone" className={Style.icon}/>
                    <h1>Ações</h1>
                    <p>Lorem ipsum, dolor sit tempora doloribus dignissimos non corrupti fuga rerum
                        itaque repellat distinctio odit consequuntur.</p>
                </div>

                <div className={Style.card}>
                    <Image src={Icon3} alt="icone" className={Style.icon}/>
                    <h1>ETFs</h1>
                    <p>Lorem ipsum, dolor sit tempora doloribus dignissimos non corrupti fuga rerum
                        itaque repellat distinctio odit consequuntur.</p>
                </div>


                <div className={Style.card}>
                    <Image src={Icon3} alt="icone" className={Style.icon}/>
                    <h1>Fundos imobiliario</h1>
                    <p>Lorem ipsum, dolor sit tempora doloribus dignissimos non corrupti fuga rerum
                        itaque repellat distinctio odit consequuntur.</p>
                </div>
            </div>

        </div>
    );
};
export default Objective;