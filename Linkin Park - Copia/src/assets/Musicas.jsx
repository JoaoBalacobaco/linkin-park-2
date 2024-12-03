import styles from "./../assets/Musicas.module.css";
import { Post } from "./Post";


const Posts = [
  {
    Id: 1,
    musica: {
      capa: "./fotos/background.jpg",
      titulo2: "From Zero(into)",
      duracao: "0:23",
      data: "15 de novembro de 2024",
    },
  },
  {
    Id: 2,
    musica: {
      capa: "./fotos/background.jpg",
      titulo2: "From Zero(into)",
      duracao: "0:23",
      data: "15 de novembro de 2024",
    },
  },
];

export function Musicas() {
  return (
    <div className={styles.seila}>
      <div className={styles.fundo}>
        {Posts.map((post) => {
          return( <Post musica={post.musica} />);
        })}
      </div>
    </div>
  );
}
