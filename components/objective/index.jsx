import Style from "./objective.module.scss"


const Objective = () => {
    return (
        <div className={Style.container}>
            <h1>Nosso objetivos</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolorum excepturi earum voluptates</p>

            <div className={Style.cards}>

                <div className={Style.card}>
                    icon
                    <h1>Ações</h1>
                    <p>Lorem ipsum, dolor sit tempora doloribus dignissimos non corrupti fuga rerum
                        itaque repellat distinctio odit consequuntur.</p>
                </div>

                <div className={Style.card}>
                    icon
                    <h1>Ações</h1>
                    <p>Lorem ipsum, dolor sit tempora doloribus dignissimos non corrupti fuga rerum
                        itaque repellat distinctio odit consequuntur.</p>
                </div>

                <div className={Style.card}>icon
                    <h1>Ações</h1>
                    <p>Lorem ipsum, dolor sit tempora doloribus dignissimos non corrupti fuga rerum
                        itaque repellat distinctio odit consequuntur.</p>
                </div>
            </div>

        </div>
    );
};
export default Objective;