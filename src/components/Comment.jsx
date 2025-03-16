import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"

export function Comment() {
  return (

    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rocketseat.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Liotti</strong>
              <time title='13 de março às 21:43' datetime="2025-03-13 21:43:44">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabens !!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}