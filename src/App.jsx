import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sideBar";

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="João Liotti"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus non accusamus velit, inventore delectus dolorem ducimus nemo, voluptas fuga iusto tenetur illo tempora assumenda consequuntur soluta possimus quos mollitia."
          />

          <Post
            author="João vitor"
            content="aula react rocketseat"
          />
        </main>
      </div>
    </div>
  );
}
