import Image from 'next/image';
import Navbar from '@/app/component/navbar'
import Hero from './component/hero';

export default function Home (){
  return(
    <div>
      <Navbar/>
      <Hero/>
    </div>
  );
}