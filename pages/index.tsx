import type { NextPage } from 'next'
import Navbar from './Components/Navbar';
import TextImageBox from './Components/TextImageBox';
//first heroes section start
 const firstHeroesData={
   title:' Converting Your Business '+'Ideas Into Our'+' Software Solutions',
   img:'/Images/homePageHeroesImage.png ',
   content:''
 }
// first heroes section end

function Home(){
  return(
      <>
       <Navbar>Contact</Navbar>
       <section className='Main-heroes-section'>
         <TextImageBox Data={firstHeroesData} order1="order-2" order2="order-1">Learn more</TextImageBox>
       </section>

      </>
  )

}
export default Home


