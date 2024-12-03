import styles from "./Fundo.module.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Menuh } from "./Menuh";
import { Conteudo } from "./Conteudo";
import logo2 from './fotos/linkin-park-band-logo-symbol-removebg-preview.png'
import { Musicas } from "./Musicas";

export function Fundo() {
  return (
    <div>
      <div className={styles.fundo}>
        <div className={styles.fundo2}>
          <Menuh></Menuh>
          <Conteudo></Conteudo>
        </div>
      </div>
      <div className={styles.comentario}>
        <Musicas></Musicas>
        <img src={logo2}/>
      </div>
    </div>
  );
}
