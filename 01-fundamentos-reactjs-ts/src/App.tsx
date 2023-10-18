import { Post, PostType } from './components/post/Post';
import { Header } from './components/header/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/sidebar/Sidebar';



const posts :PostType[]= [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dtambara.png',
      name: 'Danilo Tambara',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'O empenho em analisar a valorização de fatores subjetivos nos obriga à análise dos procedimentos normalmente adotados.',
      },
      {
        type: 'link',
        content: 'danilo.dev',
      },
      {
        type: 'link',
        content: '#dev',
      }
    ],
    publishedAt: new Date('2023-10-17 13:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/braziltaiany.png',
      name: 'Taiany Brazil',
      role: 'Full Stack Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'O empenho em analisar o desafiador cenário globalizado representa uma abertura para a melhoria das regras de conduta normativas.',
      },
      {
        type: 'link',
        content: 'taiany.dev',
      },
      {
        type: 'link',
        content: '#dev2',
      }
    ],
    publishedAt: new Date('2023-10-17 13:00:00')
  },
]
function App() {

  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post => {
          return (
            <Post 
              post={post}
              key={post.id}
              />
            )
        } )}
        </main>
      </div>
      
    </div>
  )
}

export default App
