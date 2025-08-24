import React from 'react';
import Header from '../components/header';
import Woman from "../assets/images/woman.svg"
import { Box, Button } from '@mui/material';
import MarketingSection from '../components/marketingCard';
import Group from "../assets/images/Group.svg"
import Oval from "../assets/images/Oval.svg"
import Rating from '../components/rating';
import Man from "../assets/images/1.svg"
import GirlImg from "../assets/images/girlimg.svg"
import GirlImgTwo from "../assets/images/girlimg2.svg"
import Corporate from "../assets/images/business.svg"
import IC from "../assets/images/ic.svg"
import ICT from "../assets/images/ic_timelapse.svg"
import Pass from "../assets/images/pass.svg"
import GroupTwo from "../assets/images/group2.svg"
import { useCardStore } from '../store/cardStore';
import OvalTwo from "../assets/images/Oval (1).svg"
import Footer from '../components/footer';

function Home(props) {
    const { cardImages } = useCardStore();

    return (
        <div>
            <div className='heroS xl:h-[601px] lg:h-[650px] md:h-[480px] sm:h-[400px] h-[650px]'>
                <Header />
                <div className='lg:mx-20 md:mx-7 ii lg:mt-0 md:mt-7 sm:mt-10 xl:mx-32 sm:flex items-center justify-center px-4'>
                    <div className='shift'>
                        <div>
                            <p className="m-0 text-red-500 lg:text-[14px] text-[13px]">let's shift your business </p>
                        </div>
                        <div>
                            <p className="m-0  md:mt-3 mt-3 lg:mt-5 lg:text-[50px] sm:leading-[40px] md:leading-[65px] xl:text-[60px] md:text-[45px] sm:text-[35px] text-[28px] font-bold">Shift your business fast with Shade Pro</p>
                            <p className="m-0 mt-2 text-[#161C2D] opacity-50 lg:text-[18px] md:text-[16px] text-[14px]">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                        </div>
                        <Box className="mt-6" sx={{ flexGrow: 0 }}>
                          <Button className="!bg-[#473BF0] !border-none !capitalize md:!py-2 md:!px-10 sm:!px-6 " variant="contained" color="secondary">
                            Get Started 
                          </Button>
                        </Box>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className="lg:w-[463px] image md:w-[400px] sm:w-[350px] w-[300px] lg:h-[504px]" src={Woman} alt="Woman-Image" />
                    </div>
                </div>
            </div>
            <div className='xl:py-32 lg:py-16 xl:px-20 md:px-10 md:py-14 sm:px-7 sm:py-7 px-6 py-16'>
                <div className='relative'>
                    <div className='mb-8'>
                        <p className="m-0 uppercase text-red-500 lg:text-[13px] text-[12px] font-semibold text-center">Our Services</p>
                        <p className="lg:text-[32px] text-[28px] text-center md:w-[600px] xl:w-[521px] mx-auto font-bold">We provide great services for our customers based on needs</p>
                    </div>
                    <MarketingSection/>
                    <div className="absolute right-0 bottom-[-30px] z-[-1] hidden lg:block">
                        <img src={Group} alt="Group-img" />
                    </div>
                </div>
                <div>
                    <div className='lg:flex justify-center gap-2 lg:gap-[3rem] items-center lg:py-30 md:py-24 sm:mt-16  py-20  border-b border-[#E7E9ED]'>
                        <div>
                            <img src={Oval} alt="oval-image" />
                        </div>
                        <div>
                            <div className='lg:mt-0 mt-6'>
                                <Rating/>
                            </div>
                            <div className='lg:w-[740px] mt-5'>
                                <p className="m-0 lg:text-[24px] md:text-[22px] sm:text-[20px] text-[19px] font-semibold">“OMG! I cannot believe I got my marketing campaign up and going with ease, so stress free</p>
                            </div>
                            <div className='flex gap-3 items-center mt-5'>
                                <div>
                                    <p className="m-0 text-[17px] font-semibold">Franklyn Hicks</p>
                                </div>
                                <div>
                                    <p className="m-0 text-[17px]">Data Analyst</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex lg:my-22 md:my-20 sm:my-18 my-16 xl:my-30 justify-between gap-4 items-end">
                    <div>
                        <div className='lg:w-[500px] md:w-[400px] sm:w-[400px] '>
                            <p className="m-0 uppercase text-red-500 lg:text-[13px] text-[12px] font-semibold">Our Story</p>  
                            <p className="m-0 lg:text-[36px] md:text-[30px] sm:text-[26px] text-[22px] md:mt-8 sm:mt-7 mt-6 text-black font-bold">We know how everything works and why your business is failing over and over again.</p> 
                        </div>
                        <div className='lg:mt-42 md:mt-32 sm:mt-26 mt-12'>
                            <img className='lg:w-[415px] md:w-[340px] w-[240px]  sm:w-[300px]' src={Man} alt="Man-Image" />
                        </div>                 
                    </div>
                    <div>
                        <div className='flex items-center justify-center md:justify-between'>
                            <div>
                                <img className='md:w-[318px] w-[280px]' src={GirlImg} alt="girl-image-one" />
                            </div>
                            <div>
                                <img src={GirlImgTwo} alt="girl-image-two" />
                            </div>
                        </div>
                        <div className='md:my-26 sm:my-28 my-22'>
                            <p className="m-0 md:text-[17px] text-[15px] opacity-50">We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        </div>
                    </div>
                </div>
                <div className='sm:flex items-center gap-8'>
                    <div>
                        <div>
                            <p className="m-0 text-center md:text-[44px] lg:text-[48px] sm:text-[40px] text-[38px] font-bold">1M+</p>
                            <p className="m-0 md:text-[19px] sm:text-[17px] text-[16px]  text-center opacity-75">Customers visit Omega every month to get their service done.</p>
                        </div>
                    </div>
                    <div className='md:my-0 my-10'>
                        <div>
                            <p className="m-0 text-center md:text-[44px] lg:text-[48px] sm:text-[40px] text-[38px] font-bold">92%</p>
                            <p className="m-0 md:text-[19px] sm:text-[17px] text-[16px]  text-center opacity-75">Satisfaction rate comes from our awesome customers.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="m-0 text-center md:text-[44px] lg:text-[48px] sm:text-[40px] text-[38px] font-bold">4.9/5.0</p>
                            <p className="m-0 md:text-[19px] sm:text-[17px] text-[16px]  text-center opacity-75">Average customer ratings we have got all over internet.</p>
                        </div>
                    </div>
                </div>                
            </div>
            <div className='bg-[#F4F7FA] relative'>
                <div className='absolute top-0 left-[-2px]'>
                    <img src={GroupTwo} className=' md:w-[50px] sm:w-[40px] w-[40px]' alt="group-two" />
                </div>
                <div className='py-20'>
                    <div>
                        <p className="m-0 uppercase text-red-500 lg:text-[13px] text-[12px] font-semibold text-center">Why Choose Us</p>
                        <p className="m-0 mt-3 lg:text-[36px] md:text-[32px] sm:text-[26px] people text-[22px] font-bold text-center md:w-[521px] mx-auto sm:w-[400px]">People choose us because we serve the best for everyone</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-cols-1 gap-10  z-1 md:mx-18 mx-6 lg:mx-20 justify-center border-b border-[#D8D8D8] lg:py-28">
                        <div className='flex  gap-4 items-start sm:items-center lg:my-0 mt-9'>
                            <div className='bg-[#979797]/40 sm:px-5 sm:py-5 px-3 py-3 rounded-[10px]  sm:rounded-[20px] '>
                                <img src={Corporate} alt="Corporate-img" />
                            </div>
                            <div>
                                <p className="m-0 lg:text-[21px] md:text-[18px] sm:text-[17px] text-[16px] font-bold mb-4">Dedicated project manager</p>
                                <p className="m-0 md:text-[17px] sm:text-[16px] text-[15px] text-[#161C2D] opacity-30">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                            </div>
                        </div>
                        <div className='flex  gap-4 items-start sm:items-center lg:my-0 my-3'>
                            <div className='bg-[#F64B4B]/25 sm:px-5 sm:py-5 px-3 py-3 rounded-[10px]  sm:rounded-[20px] '>
                                <img src={IC} alt="IC-img" />
                            </div>
                            <div>
                                <p className="m-0 lg:text-[21px] md:text-[18px] sm:text-[17px] text-[16px] font-bold mb-4">Organized tasks</p>
                                <p className="m-0 md:text-[17px] sm:text-[16px] text-[15px] text-[#161C2D] opacity-30">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                            </div>
                        </div>
                        <div className='flex  gap-4 items-start sm:items-center lg:my-0 mb-3'>
                            <div className='bg-[#68D585]/40 sm:px-5 sm:py-5 px-3 py-3 rounded-[10px]  sm:rounded-[20px] '>
                                <img src={Pass} alt="Pass-Icon" />
                            </div>
                            <div>
                                <p className="m-0 lg:text-[21px] md:text-[18px] sm:text-[17px] text-[16px] font-bold mb-4">Easy feedback sharing</p>
                                <p className="m-0 md:text-[17px] sm:text-[16px] text-[15px] text-[#161C2D] opacity-30">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                            </div>
                        </div>  
                        <div className='flex  gap-4 items-start sm:items-center lg:my-0 mb-16'>
                            <div className='bg-[#161C2D]/25 sm:px-5 sm:py-5 px-3 py-3 rounded-[10px] '>
                                <img src={ICT} alt="ICT-img" />
                            </div>
                            <div>
                                <p className="m-0 lg:text-[21px] md:text-[18px] sm:text-[17px] text-[16px] font-bold mb-4">Never miss deadline</p>
                                <p className="m-0 md:text-[17px] sm:text-[16px] text-[15px] text-[#161C2D] opacity-30">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                            </div>
                        </div>
                    </div>
                    <div className='sm:flex items-center justify-between md:mx-18 mx-16 lg:mx-38 lg:my-20 md:my-18 sm:my-16 my-14'>
                        <div className='md:w-[400px] sm:w-[350px]'>
                            <p className="m-0 font-bold lg:text-[32px] md:text-[28px] sm:text-[24px] lg:mb-4 sm:mb-3 mb-2 text-[23px]">Ready to launch your next project?</p>
                            <p className="m-0 text-[#161C2D] opacity-50">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        </div>
                        <div>
                          <Box className="mt-6" sx={{ flexGrow: 0 }}>
                            <Button className="!bg-[#473BF0] !border-none !capitalize md:!py-2 md:!px-10 sm:!px-6 " variant="contained" color="secondary">
                                    Get Started 
                            </Button>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:my-30 md:my-24 sm:my-22 my-20">
                <div>
                    <p className="m-0 uppercase text-red-500 lg:text-[13px] text-[12px] font-semibold text-center">case studies</p>
                    <p className="m-0 text-center lg:text-[33px] font-bold md:w-[521px] sm:w-[500px]  mx-auto xl:text-[36px] md:text-[32px] sm:text-[26px] text-[24px]">Our works describe why we are the best in the business</p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-1 justify-center">
                        {cardImages.map((card) => (
                            <div className="flex flex-col items-center justify-end mt-10">
                                <div key={card.id} className="">
                                    <img className="xl:w-[540px] lg:w-[450px] md:w-[350px] sm:w-[260px] w-[250px]" src={card.image} alt={card.title} />
                                    <div>
                                        <div className='xl:ms-10 lg:ms-8 md:ms-6 ms-5'>
                                            <div>
                                                <p className="m-0 lg:text-[22px] text-start md:text-[20px] sm:text-[18px] text-[16px] font-semibold mt-4">{card.title}</p>
                                            </div>
                                            <div>
                                                <p className="m-0 lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] opacity-70 mt-2">{card.description}</p>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-[#473BF0] bart flex justify-center items-center'>
                    <div>
                        <div>
                            <p className="m-0 uppercase text-[#68D585] lg:text-[13px] text-[12px] font-semibold text-center mb-5">testimonial</p>
                            <p className="m-0 text-center font-bold lg:w-[655px] mx-auto md:w-[620px] sm:w-[600px] text-white xl:text-[32px] text-[20px] lg:text-[28px] md:text-[26px]">Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.</p>
                        </div>
                        <div className='flex justify-center items-center my-7'>
                            <img src={OvalTwo} alt="oval-two" />
                        </div>
                        <div>
                            <p className="m-0 text-center text-white ">Ian Klein</p>
                            <p className="m-0 text-center text-white  opacity-25 font-light">Digital Marketer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>                
            </div>
        </div>
    );
}

export default Home;