import Image from 'next/image'
import { useState } from 'react';
import header_logo from '../img/header_logo.png'
import setting_icon from '../img/setting_icon.png'
import team1 from '../img/team/team1.png'
import team2 from '../img/team/team2.png'
import Slider from "react-slick";
import client01 from '../img/clients/client01.png'
import client02 from '../img/clients/client02.png'
import client03 from '../img/clients/client03.png'
import client04 from '../img/clients/client04.png'
import testimonial1 from '../img/testimonials/testimonial1.png'
import Maskgroup from '../img/Maskgroup.png'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import leftarrow from '../img/leftarrow.png';
import rightarrow from '../img/rightarrow.png';


const service_cards = [
    { id: 1, img: setting_icon, content: 'Smart contract development' },
    { id: 2, img: setting_icon, content: 'Smart contract development' },
    { id: 3, img: setting_icon, content: 'Smart contract development' },
    { id: 4, img: setting_icon, content: 'Smart contract development' },
    { id: 5, img: setting_icon, content: 'Smart contract development' },
    { id: 6, img: setting_icon, content: 'Smart contract development' },

]
const team_cards = [
    { id: 1, img: team1, content: 'Smart contract development' },
    { id: 2, img: team2, content: 'Smart contract development' },
    { id: 3, img: team2, content: 'Smart contract development' },

]
const slider_card = [
    { id: 1, img: client01, content: 'Crypto Network' },
    { id: 2, img: client02, content: 'Bankless' },
    { id: 3, img: client03, content: 'Shiba Inu' },
    { id: 4, img: client04, content: 'Phantom DAO' },
    { id: 5, img: client02, content: 'Bankless' }
]

const Service = () => {
    var settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div>
                <nav className="app__navbar">
                    <div className="flex content-center">
                        <Image src={header_logo} alt="logo" />
                        <p className='text-2xl self-center ml-2'>Avant Garde</p>
                    </div>

                    <ul className="app__navbar-links list-none flex justify-center content-center">
                        {['Testimonials', 'Projects', 'About Us'].map((item) => (
                            <li className="app__flex p-text flex flex-col cursor-pointer mx-4" key={`link-${item}`}>
                                <div />
                                <a href={`#${item}`} className="" style={{ color: 'white' }}>{item}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="app__navbar-menu">
                        <HiMenuAlt4 onClick={() => setToggle(true)} />
                        {toggle && (
                            <motion.div
                                whileInView={{ x: [300, 0] }}
                                transition={{ duration: 0.95, ease: 'easeOut' }}>
                                <HiX onClick={() => setToggle(false)} />
                                <ul>
                                    {['Testimonials', 'Projects', 'About Us'].map((item) => (
                                        <li key={item}>
                                            <a href={`#${item}`} onClick={() => setToggle(false)}>
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </nav>
            </div>
            <div className="container-lg mx-auto p-5 header__background">
                <div className="flex flex-col md:flex-row mt-28 ">
                    <div className="basis-full md:basis-8/12 flex flex-col justify-center content-center h-96 ">
                        <motion.h1
                            whileInView={{ opacity: [0, 0.3,0.6,0.8, 1] }}
                            transition={{ duration: 1.5, delayChildren: 0.5 }}
                            className="text-4xl md:text-6xl leading-10 md:leading-normal my-2 self-center w-10/12 mx-auto center1" style={{ color: 'color: #EDEEEF', fontFamily: 'DM Sans, sans-serif;' }}>Unlock Your Business&apos;s Potential  with Blockchain <br />Technology</motion.h1>
                        <p className="w-10/12 mx-auto  text-lg md:text-2xl mb-20 md:mb-0" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>We provide software solutions that are tailor made for you</p>

                    </div>
                    <motion.div


                        className="basis-full md:basis-4/12">
                        <motion.div
                            whileInView={{ x: [80, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}

                            className='h-36 w-8/12 p-4 rounded-xl relative ' style={{ background: '#383356' }}>
                            <p className="">Highly skilled team with an average of 5 years of experience</p>
                            <div className=""><Image src={Maskgroup} alt="maksGroup" className="absolute right-0 bottom-0  h-16 w-auto" /></div>
                        </motion.div>
                        <motion.div
                            whileInView={{ x: [80, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.6 }}
                            className='h-36 w-8/12 p-4 rounded-xl relative bottom-7 left-28' style={{ background: '#252934' }}>
                            <p className="">We have a client satisfaction rating of 97%</p>
                            <div className=""><Image src={Maskgroup} alt="maksGroup" className="absolute right-0 bottom-0  h-16 w-auto" /></div>
                        </motion.div>
                        <motion.div
                            whileInView={{ x: [80, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.7 }}
                            className='h-36 w-8/12 p-4 rounded-xl relative bottom-16 right-0 md:right-10' style={{ background: '#2d298ad1' }}>
                            <p className="">30+ successful projects from over 10 countries</p>
                            <div className=""><Image src={Maskgroup} alt="maksGroup" className="absolute right-0 bottom-0  h-16 w-auto" /></div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="conatiner mx-auto p-5 mt-0 md:mt-20">
                <h1 className="text-center text-4xl md:text-6xl font-semibold my-2 " style={{ color: 'color: #EDEEEF' }}>WHAT WE OFFER</h1>
                <div className='p-1 md:p-3 flex justify-center'><p className="text-center p-2 md:p-5  text-lg md:text-xl w-10/12" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>We provide tailor made solutions from scratch. Building, deployment and analytics. is a design-led and domain agnostic team with deep expertise working </p></div>

                <div className="flex flex-wrap justify-center content-center gap-5 p-5 pb-0 w-10/12 md:w-8/12 mx-auto">
                    {service_cards.map((e) => {
                        return (
                            <div class=" flex flex-col justify-center items-center rounded-xl p-4 w-60  cursor-pointer" style={{ background: '#3c4150' }} key={e.id}>
                                <Image src={e.img} alt="" className='logo self-center m-1 ' />
                                <p className='p-2 text-center'>Smart contract <br /> development</p>
                            </div>
                        )
                    })}
                </div>
            </motion.div>
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="container mx-auto p-5 flex flex-col justify-center mt-28">
                <h1 className="text-center  text-4xl md:text-6xl font-semibold my-2" style={{ color: 'color: #EDEEEF' }}>TEAM</h1>
                <div className='p-1 md:p-3 flex justify-center'><p className="text-center p-2 md:p-5  text-lg md:text-xl w-10/12" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Led by a team of world class builders from Ycombinator, a16z and featured in </p></div>
                <div className="flex flex-wrap justify-center content-center gap-5 p-5 cursor-pointer">
                    {team_cards.map((e) => {
                        return (
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                                class=" flex flex-col justify-center items-center rounded-xl p-4 w-60"
                                key={e.id}>
                                <Image src={e.img} alt="" className='logo self-center m-1' />
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
            <div
                
                className="conatiner mx-auto p-5 flex flex-col justify-around header__background1">
                <h1 className="text-center text-4xl md:text-6xl font-semibold my-2">OUR CLIENTS</h1>
                <div className="px-5 my-20">
                    <Slider {...settings} className="">
                        {slider_card.map((e) => {
                            return (
                                <div className="p-5 flex flex-col justify-center content-center cursor-pointer" key={e.id}>
                                    <div className='w-60 h-40  flex justify-center content-center mx-auto'><Image src={e.img} alt="" className='logo self-center ' /></div>
                                    <p className='text-center mt-2'>{e.content}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className='text-center text-lg md:text-2xl '><p className='py-3 px-5 md:px-8 rounded-lg border inline-block cursor-pointer bg-buttonColor hover:bg-slate-800' >View All</p></div>
            </div>
            <div
                
                className="container h-screen mx-auto p-5 flex flex-col justify-around mt-28">
                <h1 className="text-center  text-4xl md:text-6xl font-semibold my-2" style={{ color: 'color: #EDEEEF' }}>TESTIMONIALS</h1>
                <div className="flex flex-col md:flex-row justify-around mt-10 md:mt-0">
                    <motion.div
                        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="flex mb-5 md:mb-0">
                        <div className=" p-5 rounded-xl rounded-br-none inline-block" style={{ background: '#252934' }}>
                            <p className='text-lg'>&quot;Greatly experienced and highly reliable <br /> team.&quot; </p>
                            <p className='text-lg text-right mt-2'>- Jane Foster</p>
                        </div>
                        <div className='w-32 h-30 flex justify-start content-center mx-auto ml-2 relative'><Image src={testimonial1} alt="" className='logo self-end mt-10 absolute top-10 left-0' /></div>
                    </motion.div>
                    <motion.div
                        whileInView={{ x: [60, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="flex">
                        <div className=" p-5 rounded-xl rounded-br-none inline-block" style={{ background: '#252934' }}>
                            <p className='text-lg'>&quot;Greatly experienced and highly reliable <br /> team.&quot; </p>
                            <p className='text-lg text-right mt-2'>- Jane Foster</p>
                        </div>
                        <div className='w-32 h-30 flex justify-start content-center mx-auto ml-2 relative'><Image src={testimonial1} alt="" className='logo self-end mt-10 absolute top-10 left-0' /></div>
                    </motion.div>
                </div>
                <div className="flex justify-center">
                    <motion.div
                    whileInView={{ x: [-60, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex">
                        <div className=" p-5 rounded-xl rounded-br-none inline-block" style={{ background: '#252934' }}>
                            <p className='text-lg'>&quot;Greatly experienced and highly reliable <br /> team.&quot; </p>
                            <p className='text-lg text-right mt-2'>- Jane Foster</p>
                        </div>
                        <div className='w-32 h-30 flex justify-start content-center mx-auto ml-2 relative'><Image src={testimonial1} alt="" className='logo self-end mt-10 absolute top-10 left-0' /></div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="container h-screen mx-auto p-5 flex flex-col contact__us mt-28  header__background" >
                <h1 className="text-center text-4xl md:text-6xl font-semibold my-2 " style={{ color: 'color: #EDEEEF' }}>CONTACT US</h1>
                <div className="flex flex-col md:flex-row h-screen">
                    <div className="basis-1/2 flex justify-center">
                        <div className="self-center">
                            <p className=" text-xl leading-7 md:leading-normal md:text-5xl"> Our teams are <br /> ready to help!</p>
                            <p className='mt-4 text-xl' style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Get contacted by the team within <br /> 24 hours</p>
                        </div>
                    </div>
                    <div className="basis-1/2 p-5 text_fields">
                        <div className="flex flex-col justify-around content-center h-full p-5">
                            <div className='relative'>
                                <div className="absolute bottom-9 md:bottom-8"><p className='inline-block py-1 px-3'>Name</p></div>
                                <input type="text" className='w-9/12 p-2' />
                            </div>
                            <div className='relative my-10 md:my-0'>
                                <div className="absolute bottom-9 md:bottom-8"><p className='inline-block py-1 px-3'>Email</p></div>
                                <input type="email" className='w-9/12 p-2' />
                            </div>
                            <div className='relative'>
                                <div className="absolute bottom-28 md:bottom-24"><p className='inline-block py-1 px-3'>Your message</p></div>
                                <textarea id="message" rows="4" className='w-9/12 p-2'></textarea>
                            </div>
                            <div className=''><span className='px-5 py-2 rounded-xl inline-block cursor-pointer border bg-gray-800 hover:bg-slate-700'>submit</span></div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div
                
                className="p-2" style={{ background: '#151c31' }}>
                <div className="flex content-center ml-20">
                    <Image src={header_logo} alt="footer_logo" className='inline' />
                    <p className="text-lg self-center ml-2">Avant Garde</p>
                </div>
                <div>
                    <p className="text-sm ml-20" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Copyright © 2023 LAYERUP. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Service