import styles from './Conteudo.module.css'
import video from './fotos/VB_1920x480_jsgtr.mp4'
import disco from './fotos/disco.png'
import setinha from './fotos/arrow_right_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
export function Conteudo() {
  return (
    <div>
      <div className={styles.fundo}>
          <video autoPlay loop muted src={video}></video>
      </div>
      <div className={styles.musicas}>
          <a href="#" className={styles.item1}>
            <div className={styles.item1a}>
              <h2>TURNE MUNDIAL</h2>
              <div className={styles.turne}>
                <img src={setinha} />
              </div>
            </div>
          </a>
          <a href="#" className={styles.item2}>
            <div className={styles.item2a}>
              <h2>OVER EACH OTHER</h2>
              <div className={styles.turne}>
                <img src={setinha} />
              </div>
            </div>
          </a>
          <a href="#" className={styles.item3}>
            <div className={styles.item3a}>
              <img src={disco} alt="disco"/>
            </div>
          </a>
          <a href="#" className={styles.item4}>
            <div className={styles.item4a}>
              <h2>THE EMPTNESS MACHINE</h2>
              <div className={styles.turne}>
                <img src={setinha} />
              </div>
            </div>
          </a>
          <a href="#" className={styles.item5}>
            <div className={styles.item5a}>
              <h2>HEAVY IS THE CROWN</h2>
              <div className={styles.turne}>
                <img src={setinha} />
              </div>
            </div>
          </a>
          <a href="#" className={styles.item6}>
            <div className={styles.item6a}>
              <h2>FROM ZERO PLAY LIST</h2>
              <div className={styles.turne}>
                <img src={setinha} />
              </div>
            </div>
          </a>
      </div>
    </div>
  );
}