import Image from 'next/image'
import Logo from "@/app/Public/Logo.png"
const Navbar = ()=> {
    return(
        <>
            <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">  
                <div className="w-[191px] h-[34px]"> 
                    <Image src={Logo} alt='logo' className='hover:scale-125 hover:shadow-2xl '/>
                </div>
                <div className='w-[737.5px] h-[60px] flex justify-between items-center  '>
                    <div className='w-[549px] h-[23px] '>
                        <ul className='flex flex-row gap-8 text-white '>
                            <li className='hover:scale-125 hover:shadow-2xl '>Products</li>
                            <li className='hover:scale-125 hover:shadow-2xl '>Solutions</li>
                            <li className='hover:scale-125 hover:shadow-2xl '>Resources</li>
                            <li className='hover:scale-125 hover:shadow-2xl '>Pricing</li>
                        </ul>
                    </div>
                    <div className='w-[126px] h-[60px]'>
                        <button className='px-10 py-4 rounded-lg bg-[#FFE492] hover:scale-110 hover:shadow-2xl '>Login</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Navbar
