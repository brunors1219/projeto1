import Objective from "../components/objective";
import Header from "../components/header";
import Welcome from "../components/welcome";
import styles from "./globais.scss";
import Contato from "../components/contato";
export default function Home() {
  return (
      <div className={styles.container}>
        <Header/>
        <Welcome/>
        <Objective/>
        <Contato/>
      </div>
  );
}
