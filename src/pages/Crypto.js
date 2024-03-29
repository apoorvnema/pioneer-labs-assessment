import React from 'react'
import CryptoCard from '../components/CryptoCard'

const Crypto = () => {

    return (
        <div className='Crypto Content'>
            <div className='Crypto Heading'><h1>BITCOIN PRICES</h1><img className='logo' src="/Bitcoin.svg" alt="bitcoin" /></div>
            <CryptoCard />
            <p className='note'>Note: Cryptocurrency Price will update every 30 seconds</p>
        </div>
    )
}

export default Crypto