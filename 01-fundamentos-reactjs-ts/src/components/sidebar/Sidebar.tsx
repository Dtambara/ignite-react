import { Avatar } from '../avatar/Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=40' 
      />
      <div className={styles.profile}>
        <Avatar src='https://avatars.githubusercontent.com/u/20234337?v=4'/>
        <strong>Danilo Tambara</strong>
        <span>Web Developer</span>
      </div>
      <footer>
       
        <a href='#'>
          <PencilLine size={20}/> 
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}