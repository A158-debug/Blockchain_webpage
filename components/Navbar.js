import react, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import Image from 'next/image'
import { motion } from 'framer-motion';
import header_logo from '../src/img/header_logo.png'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className="app__navbar">
                <div className="flex content-center cursor-pointer">
                    <Image src={header_logo} alt="logo" />
                    <p className='text-2xl self-center ml-2'>Avant Garde</p>
                </div>

                <ul className="app__navbar-links list-none flex justify-center content-center">
                    {['Testimonials', 'Projects', 'Contact Us'].map((item) => (
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
        </>
    )
}

export default Navbar