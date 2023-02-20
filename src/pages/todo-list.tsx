import Head from 'next/head';
import {useState} from "react";
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { finished } from 'stream';

const inter = Inter({ subsets: ['latin'] })

export default function todoList() {
  const [todo, setTodo] = useState<string[]>(
    [
      "論文読む",
      "0",
      "1",
    ]);

    const [inputItem, setinputItem] = useState<string>("");

    const finishedItem = (item: string) => {
      const newTodo = todo.filter((todo) => todo !== item);
      setTodo(newTodo);
    };

    const insertItem = () => {
      if(inputItem=="") return;
      const newTodo = todo.concat(inputItem);
      setTodo(newTodo);
      setinputItem("");
    }

  return (
    <>
      <Head>
        <title>To do list</title>
      </Head>
      <main className={styles.main}>
        <h1>To do list</h1>
        <div>
          <input type="text" placeholder="todoを追加"
          onChange={(event) => setinputItem(event.target.value)}
          value={inputItem}/>
          <button
          onClick={()=>insertItem()}>追加</button>
        </div>
       <table>
        <thead>
          <tr>
            <th>TODO</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((item) => {
            return (
              <tr key={item}>
                <td>{item}</td>
                <td>
                   <button onClick={() => finishedItem(item)}>完了</button>
                </td>
              </tr>
            )
          })}
        </tbody>
       </table>
      </main>
    </>
  )
}
