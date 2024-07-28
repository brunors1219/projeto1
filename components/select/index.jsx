import Styles from "./select.module.scss"

const Select = ({placeholder, required, option}) => {
    return <select className={Styles.select} required= {required}>
        <option value="">{placeholder}</option>
        {option?.map((option, index)=> (
            <option key={index} value={option.value}>
                {option.label}
        </option>
        ))}
    </select>;
};
export default Select;