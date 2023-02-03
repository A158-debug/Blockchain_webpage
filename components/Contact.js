import React from 'react'
import header_logo from '../src/img/header_logo.png'
import { motion } from 'framer-motion';
import Image from 'next/image'

const contact = () => {
    return (
        <>
            <motion.div
                id="Contact Us"
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
                <div className="flex content-center ml-20 cursor-pointer">
                    <Image src={header_logo} alt="footer_logo" className='inline' />
                    <p className="text-lg self-center ml-2">Avant Garde</p>
                </div>
                <div>
                    <p className="text-sm ml-20" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Copyright © 2023 LAYERUP. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default contact