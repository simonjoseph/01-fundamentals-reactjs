
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import styles from "./App.module.css"

import './global.css'

const post = [
  {
    id: 1,
    author: {
      name: 'Simão José',
      avatar: 'https://avatars.githubusercontent.com/u/50570879?v=4',
      role: 'author',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea fugiat, laborum sit, animi consectetur, asperiores ducimus at fuga quia ipsum. Ipsa, placeat dicta. Numquam maxime aspernatur ratione optio suscipit! 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'lnik', content: '#rocketseat' }
    ],
    publishedAt: new Date('2024-06-09 11:00:00')
  },
  {
    id: 1,
    author: {
      name: 'Simão José',
      avatar: 'https://avatars.githubusercontent.com/u/50570879?v=4',
      role: 'author',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea fugiat, laborum sit, animi consectetur, asperiores ducimus at fuga quia ipsum. Ipsa, placeat dicta. Numquam maxime aspernatur ratione optio suscipit! 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'lnik', content: '#rocketseat' }
    ],
    publishedAt: new Date('2024-06-09 11:00:00')
  }
]

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          <Post
            author="Elizabete Mateus"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea fugiat, 
            laborum sit, animi consectetur, asperiores ducimus at fuga quia ipsum. Ipsa, placeat dicta. Numquam 
            maxime aspernatur ratione optio suscipit! 🚀"
          />
          <Post
            author="Terêncio Victor José"
            content="🚀 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, a, quia quasi consequatur 
            doloribus quas omnis molestias placeat neque veniam aut, atque veritatis sunt nam ab corrupti laborum debitis possimus?"
          />
        </main>
      </div>
    </>
  )
}
