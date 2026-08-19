'use client'

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface postProps {
  id: number;
  title: string;
  desc: string;
  link: string;
}

let arr = [];
let id: number = 1;

const Form = () => {
  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState(id);
  const [titlePost, setTitlePost] = useState('title');
  const [descPost, setDescPost] = useState('desc');
  const [linkPost, setLinkPost] = useState('link');

  function addPost() {
    const obj: postProps = {
      id: idPost,
      title: titlePost,
      desc: descPost,
      link: linkPost
    }
    id++;
    setIdPost(id);
    setTitlePost('title');
    setDescPost('desc');
    setLinkPost('link');
    arr.push(obj);
    setPosts(arr);
  }

  return (
    <>
      <Input className="mb-[15px]" placeholder="заголовок"/>
      <Input className="mb-[15px]" placeholder="описание"/>
      <Input className="mb-[15px]" placeholder="ссылка"/>
      <Button onClick={addPost}>добавить</Button>
      <ul>
        {
          posts?.map((post: postProps) => (
            <li key={post.id}>
              <div>{post.id}</div>
              <div>{post.title}</div>
              <div>{post.desc}</div>
              <div>{post.link}</div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Form