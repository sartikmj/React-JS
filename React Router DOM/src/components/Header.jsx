import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
                <h2 className='text-2xl'>Sartik <input className='text-black bg-white' type='text' /></h2>
                <div className='flex gap-10 text-lg underline'>

                    {/* Using this <Link> tag ,page will not reload when getting to the other router */}
                    <Link to='/' >Home</Link>
                    <Link to='/about' >About</Link>
                    <Link to='/product' >Product</Link>
                    <Link to='/contact' >Contact</Link>

                    {/* using these <a> tag will make page realod every time you get to another route  */}
                    {/* <a className='text-xl underline' href="/">Home</a>
                    <a className='text-xl underline' href="/about">About</a>
                    <a className='text-xl underline' href="/contact">Contact</a>
                    <a className='text-xl underline' href="/product">Product</a> */}
                </div>
            </div>
        </>
    )
}

export default Header