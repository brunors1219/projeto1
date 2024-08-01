import Styles from "./input.module.scss"

const Input = ({type, name, placeholder,pattern, required}) => {
    return (
        <input type={type}
            name={name}
            placeholder={placeholder}
            pattern={pattern}
            required={required} 
            className={Styles.input}
            />
        );
}

export default Input;