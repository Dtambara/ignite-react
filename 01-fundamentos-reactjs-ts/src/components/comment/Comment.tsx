import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from '../avatar/Avatar.jsx';
import { useState } from 'react';

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void,
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount((state) => {
      return state + 1;
    })
  }

  

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/20234337?v=4'/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Danilo Tambara</strong>
              <time dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{ content }</p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}