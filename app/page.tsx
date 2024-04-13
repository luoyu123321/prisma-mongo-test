"use client";
import prisma from '@/prisma';
// import Request from '@/app/api/register/route'; 
import { useEffect } from 'react';
export default function Home() {
  // GET().then((res)=>{
  //   console.log(111,res);
  //   data = res;
  // })
  useEffect( () => {
    const test = {title:'laorytest3',content:'laorytest3content'};
    const params = JSON.stringify(test);
    const aaa =()=> {
      fetch('/api/register', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log('res',res);
      })
      // fetch('/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: params,
      // })
      // .then((res)=>{
      //   console.log('res',res);
      // })
    }
    aaa();
  }, []);
  return (
    <>
      <div>hello prisma</div>
    </>
  )
}
