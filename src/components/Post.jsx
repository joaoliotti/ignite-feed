import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/rocketseat.png' />
          <div className={styles.authorInfo}>
            <strong>João Liotti</strong>
            <span>Dev</span>
          </div>
        </div>

        <time title='13 de março às 21:43' datetime="2025-03-13 21:43:44">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

          <p>
            <a href="">#novoprojeto</a> {' '}
            <a href="">#nlw</a> {' '}
            <a href="">#rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>

      </form>

      <div className={styles.commentlist}>
        <Comment />
      </div>
    </article>
  )
}