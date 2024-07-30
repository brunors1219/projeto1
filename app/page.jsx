import Objective from "../components/objective";
import Header from "../components/header";
import Welcome from "../components/welcome";
import styles from "./globais.scss";
import Contato from "../components/contato";
import Footer from "../components/footer";
export default function Home() {
  return (
      <div className={styles.container}>
        <Header/>
        <Welcome/>
        <Objective/>
        <Contato/>
        <Footer/>
      </div>
  );
}
