import styles from './../assets/Musicas.module.css';

export function Post(musica) {
  return (
    <div className={styles.fundop}>
        <div className={styles.musicas}>
            <img src={musica.capa}/>
            <div className={styles.titulo}>
                <h2>{musica.titulo2}</h2>
                <h6>{musica.duracao}</h6>
            </div>
            <h7>{musica.data}</h7>
        </div>
    </div>
  );
}
