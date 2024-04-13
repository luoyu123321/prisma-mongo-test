"use client";
import prisma from '@/prisma';
// import Request from '@/app/api/register/route'; 
import { useEffect, useState } from 'react';
export default function Home() {
  const [numbers, setNumbers] = useState<number>(3);
  const [dataSourse, setDataSourse] = useState<{ title: string, content: string }[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData =  () => {
    fetch('/api/register', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then(({post}) => {
        setDataSourse(post);
        console.log('post', post);
      })
  }

  const Btn = () => {
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: 'laorytest' + numbers, content: 'laorytest' + numbers + 'content' }),
    })
      .then((res) => {
        console.log('res', res);
        setNumbers(numbers + 1);
        getData();
      })
  }
  return (
    <>
      <button onClick={Btn} >加一</button>
      {dataSourse.map((item, index) => {
        return <div key={index}>{item.title+'------'+item.content}</div>
      })}
    </>
  )
}
