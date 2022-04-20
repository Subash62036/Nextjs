import type { GetStaticProps, NextPage } from 'next'
import { Characters, getCharacterResults } from '../types';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from './Components/Navbar';

const Home: NextPage<{ characters: Characters[] }> = ({ characters }) => {
  return (
   <>
    <Head>
         <title>id card page</title>
         <Script src="./sc.js" ></Script>
         
    </Head>
    <Navbar />
      {characters.map((data) => {
        return (

          <div className='w-full md:p-10 font-[Poppins] shadow-lg '>
            <div className='image'>
              <div>
                <img src="/Images/logo.svg" alt="logo" className=' ml-auto mr-auto' />
              </div>
              <div className='profile ml-auto mr-auto'>
                <Image src="https://img.icons8.com/color/2x/administrator-male-skin-type-7.png" width='50' height='50' alt="profile" className=' border-2 border-red-400 rounded-full'></Image>
              </div>
            </div>
            <div className='Name text-center font-bold'>
              <h1 className=' text-lg'>{data.name}</h1>
            </div>
            <ul className=' border-l-4 border-red-400 p-2'>
              <li>Id :{data.id}</li>
              <li>Gender:{data.gender}</li>
              <li>Email: {data.email}</li>
              <li>Status: {data.status}</li>
            </ul>
          </div>
        )
      })}

    </>
  )
};
//for calling get api 
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://gorest.co.in/public/v2/users");
  const results: getCharacterResults = await res.json();
  return {
    props: {
      characters: results,
    },
  };
};

// for amp : it stands for accelerate mobile page, that help us to increase loading of webpage
export const abc={amp:true}


export default Home
