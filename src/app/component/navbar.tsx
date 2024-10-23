import Link from 'next/link'

export default function Navbar(){
    return(
            <div className='flex gap-x-11 bg-blue-800'>
                <div className='text-red-600 text-2xl font-extrabold'>AI COURSE </div>
            <div className='flex gap-2 text-xl text-white'>
            <Link href='/'>Home</Link>
            <br/>
            <Link href='/typescript'>Typescript</Link>
            <br/>
            <Link href='/html'>HTML</Link>
            <br/>
            <Link href='/css'>CSS</Link>
            <br/>
            <Link href='/next.js'>Next.js</Link>
            <br/>
            <Link href='/about'>About</Link>
            <br/>
            <Link href='/contact'>Contact</Link>
        </div>
        </div>
    )
}