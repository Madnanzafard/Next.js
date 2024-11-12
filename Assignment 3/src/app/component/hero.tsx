import React from "react";
import Image from "next/image";
import Circle  from "@/app/Public/Circle.png"
import Apple from "@/app/Public/Apple.png"
import Google from "@/app/Public/Google.png"
import Microsoft from "@/app/Public/Microsoft.png"
import Slack from "@/app/Public/Slack.png"
import Logo from "@/app/Public/Logo.png"

const Hero=() =>{
    return(
        <>
                                                {/*Hero Page*/} 
        <section>
           <div className=" w-[1920px] h-[829px] py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center">
                <div className="w-[656px] h-[361px]">
                    <div className="w-[656px] h-[238px]">
                        <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-7 ">
                            Get More Done with whitespace</h2>
                        <p className="font-normal text-lg leading-[30px] tracking-[-0.02em mb-6]">
                        Project management software that enables your teams to collaborate, plan,
                         analyze and manage everyday tasks</p>
                    </div>
                    <div className="w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg p-5 gap-[10px] mt-20 hover:scale-105 hover:shadow-2xl hover:bg-purple-600">
                        <button>Try Whitespace free → </button>
                    </div>
                </div>
                <div className="w-[824px] h-[549px] gap-1 bg-[#C4DEFD] hover:scale-105 hover:shadow-2xl "></div>
           </div> 
           </section>
                                                 {/*Page 1*/} 

          <section>
             <div className="w-[1920px] h-[1588px] py-[140px] px-[220px] top-[921px] gap-[100] left-[1px]">
                <div className="w-[1480px] h-[547px] gap-[60px] flex items-center mb-36">
                    <div className="w-[672px] h-[411px] gap-[60px]">
                        <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] mb-7">Project Management</h1>
                        <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] mb-16">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly
                             from the app. Take photos with the mobile app and save them to a note.</p>
                        <div>
                            <button className="w-[201px] h-[63px] rounded-md px-10 py-5 gap-5 bg-[#4F9CF9] text-white  hover:scale-105 hover:shadow-2xl hover:bg-purple-600" >
                                Get Started →</button>
                        </div>
                    </div>
                    <div className="w-[748px] h-[547px] bg-[#C4DEFD] hover:scale-105 hover:shadow-2xl"></div>
                </div>

                <div className="w-[1480px] h-[661px] gap-[100px] flex items-center">
                    <div  className="w-[710px] h-[661px] hover:scale-105 hover:shadow-2xl " >
                        <Image src={Circle} alt='Image'/>
                    </div>
                    <div className="w-[670px] h-[294px] gap-[60px]">
                        <h1 className="w-[670px] h-[87px] font-bold text-7xl leading-[]87.14px] tracking-[-0.02em] mb-7">
                            Work together</h1>
                        <p className="w-[670px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] mb-24">
                        With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others
                        </p>
                        <button className="w-[186px] h-[63px] px-10 py-5 rounded-md gap-[10px] bg-[#4F9CF9] text-white hover:scale-105 hover:shadow-2xl hover:bg-purple-600">
                            Try it now →</button>
                    </div>
                 </div>
             </div>
           </section>

                                                {/*Page 2*/}
           
           <section>
                <div className="w-[1921px] h-[759px] py-[140px] px-[220px] gap-[98px] top-[2509px] left-[1px] bg-[#043873] text-white flex items-center">
                    <div className="w-[697px] h-[294px] gap-[60px]">
                        <div className="w-[697px] h-[171px] gap-6">
                            <h1 className="w-[697px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em] mb-7">
                                Use as Extension</h1>
                            <p className="w-[697px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] mb-14 ">
                            Use the web clipper extension, available on Chrome and Firefox,
                             to save web pages or take screenshots as notes.</p>
                            <button className="w-[171px] h-[63px] py-5 px-10 rounded-md gap-[10px] bg-[#4F9CF9] hover:scale-105 hover:shadow-2xl hover:bg-purple-600">
                                Let's go →</button>
                        </div>
                    </div>
                    <div className="w-[686px] h-[479px] bg-[#C4DEFD] hover:scale-105 hover:shadow-2xl "></div>
                </div>
           </section>

                                                {/*Page 3*/}

           <section>
                <div className="w-[1921px] h-[812.09px] py-[140px] px-[220px] top-[3268px] left-[1px] gap-[98px] flex items-center">
                    <div className="w-[714px] h-[532.09px] bg-[#C4DEFD] gap-1 hover:scale-105 hover:shadow-2xl "></div>
                    <div className="w-[669px] h-[411px] gap[60px]">
                        <div className="w-[669px] h-[288px] gap-6">
                            <h1 className="w-[669px] h-[174px]  font-bold text-7xl leading-[87.12px] tracking-[-0.02em]">
                                Customise it to your needs
                            </h1>
                            <p className="h-[90px] font-normal text-lg leading-[30px] tracking-[-0.02em] py-4 mb-7">
                            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown).
                             Or create your own scripts and plugins using the Extension API.
                            </p>
                        </div>
                        <div className=" w-[171px] h-[63px] rounded-lg py-5 px-10 gap-[10px] bg-[#4F9CF9] hover:scale-105 hover:shadow-2xl hover:bg-purple-600">
                            <button className=" text-white ">
                                Let's Go →</button>
                        </div>
                    </div>
                </div>
           </section>

                                                {/*Page 4*/}

           <section>
                <div className="w-[1921px] h-[574px] py-[140px] px[220px] top-[4080px] left-[1px] bg-[#043873] grid place-items-center text-white ">
                    <div className="w-[1481px] h-[294px] gap-[60px] grid place-items-center">
                        <div className="w-[1064px] h-[171px] gap-6 ">
                            <h1 className="h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-center">
                            Your work, everywhere you are</h1>
                            <p className="h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] text-center py-6">
                            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. 
                            The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                            </p>
                        </div>
                        <div className="w-[195px] h-[63px] rounded-lg py-5 px-10 gap-5 bg-[#4F9CF9] hover:scale-105 hover:shadow-2xl hover:bg-purple-600">
                            <button className="">Try Taskey →</button>
                        </div>
                    </div>
                </div>
           </section>

                                                {/*Sponsors*/}

           <section>
                <div className="w-[1921px] h-[538px] top-[4654px] py-[140px] px-[220px] gap-[100px]  ">
                    <div className="w-[1482px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em] ">
                        <h1 className="text-center">Our sponsors</h1>
                    </div>
                    <div className="w-[1482px] h-[71px] justify-between flex mt-32 ">
                        <Image src={Apple} alt='logo' className="w-[55.47px] h-[68px] gap-1 hover:scale-105 hover:shadow-2xl "/>
                        <Image src={Microsoft} alt='logo' className="w-[287px] h-[62px] gap-1 hover:scale-105 hover:shadow-2xl"/>
                        <Image src={Slack} alt='logo' className="w-[280px] h-[71px] gap-1 hover:scale-105 hover:shadow-2xl "/>
                        <Image src={Google} alt='logo' className="w-[211px] h-[69.81px] gap-1 hover:scale-105 hover:shadow-2xl"/>
                    </div>
                </div>
           </section>
                                                 {/*Footer*/} 
           <section>
            <div className="w-[1921px] h-[461px] top-[5195px] left-[1px] py-[140px] px-[220px] gap-[200px] bg-[#043873] text-[#F7F7EE]">
                <div className="w-[1480px] h-[289px] gap-[100px] ">
                    <div className="w-[1480px] h-[169px] gap-[100px] flex ">
                        <div className="w-[295px] h-[169px] gap-[15px] ">
                            <Image src={Logo} alt='logo' className="w-[191px] h-[34px] hover:scale-105 hover:shadow-2xl "/>
                            <p className="w-[240px] h-[120px] font-normal text-lg leading-[30px] tracking-[-0.02em] py-6">
                            whitepace was created for the new ways we live and work. We make a better workspace around the world
                            </p>
                        </div>
                        <div className="w-[295px] h-[127px] gap-[15px]  flex">
                            <ul>
                                <li className="font-bold text-lg pb-3">Products</li>
                                <li className="font-normal text-base pb-3 text-[#FFE492]">Overview</li>
                                <li className="font-normal text-base pb-3">Pricing</li>
                                <li className="font-normal text-base pb-3">Customer stories</li>
                            </ul>
                        </div>
                        <div className="w-[295px] h-[130px] gap-[16px]">
                            <ul>
                                <li className="font-bold text-lg pb-3">Resources</li>
                                <li className="font-normal text-base pb-3">Blog</li>
                                <li className="font-normal text-base pb-3">Guides & tutorials</li>
                                <li className="font-normal text-base pb-3">Help center</li>
                            </ul>
                        </div>
                        <div className="w-[295px] h-[130px] gap-[16px]">
                            <ul>
                                <li className="font-bold text-lg pb-3">Company</li>
                                <li className="font-normal text-base pb-3">About us</li>
                                <li className="font-normal text-base pb-3">Careers</li>
                                <li className="font-normal text-base pb-3">Media kits</li>
                            </ul>
                        </div>
                    </div>
                    <hr className= "mt-20 mb-5 border-[#2E4E73]"/>
                    <div className="w-[1480px] h-[20px] justify-between ">
                        <p className="font-normal text-base text-center">©2021 Whitepace LLC.</p>
                    </div>
                </div>
            </div>
           </section>
        </>
    )
}
export default Hero

