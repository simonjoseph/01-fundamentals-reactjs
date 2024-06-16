
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import styles from "./App.module.css"

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Simão José',
      avatar: 'https://avatars.githubusercontent.com/u/50570879?v=4',
      role: 'Programmer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea fugiat, laborum sit, animi consectetur, asperiores ducimus at fuga quia ipsum. Ipsa, placeat dicta. Numquam maxime aspernatur ratione optio suscipit! 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#nlw' },
    ],
    publishedAt: new Date('2024-06-09 11:00:00')
  },
  {
    id: 2,
    author: {
      name: 'Terêncio Victor José',
      avatar: 'https://avatars.githubusercontent.com/u/167316723?v=4',
      role: 'Dev',
    },
    content: [
      { type: 'paragraph', content: 'Fala Pessoal 👋' },
      {
        type: 'paragraph',
        content: 'Lorems ipsums dolors sit amet consectetur adipisicing elits. Dignissimos ea fugiat, laborum sit, animi consectetur, asperiores ducimus at fuga quia ipsum. Ipsa, placeat dicta. Numquam maxime aspernatur ratione optio suscipit! 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#rocketseat' }
    ],
    publishedAt: new Date('2024-08-09 11:00:00')
  }
]

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          {posts.map(post =>{
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
