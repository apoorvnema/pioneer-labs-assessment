import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CryptoCard = () => {
    const [bitCoinData, setBitCoinData] = useState([]);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
                setBitCoinData(response.data.bpi);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        const intervalId = setInterval(fetchData, 60000);
        return () => clearInterval(intervalId);
    }, []);

    const getSymbol = (key) => {
        let symbol = "";
        switch (key) {
            case 'USD': symbol = String.fromCharCode(36);
                break;
            case 'GBP': symbol = String.fromCharCode(163);
                break;
            case 'EUR': symbol = String.fromCharCode(8364);
                break;
            default: symbol = String.fromCharCode(36);
                break;
        }
        return symbol
    }

    const getFlag = (key) => {
        let flag = "";
        switch (key) {
            case 'USD': flag = "/USA.svg";
                break;
            case 'GBP': flag = "/UK.svg";
                break;
            case 'EUR': flag = "/EUROPE.svg";
                break;
            default: flag = "/USA.svg";
                break;
        }
        return flag
    }

    return (
        <div className={`cards ${isMobile ? 'cards-mobile' : 'cards-desktop'}`}>
            {Object.keys(bitCoinData).map((key, index) => (
                <div className={`card ${isMobile ? 'card-mobile' : 'card-desktop'}`} key={index}>
                    <div className="container">
                        <div className="container" key={key}>
                            <img className='flag' src={getFlag(key)} alt="flag"></img>
                            <h4><b>{bitCoinData[key]['description']} {"("}{key}{")"}</b></h4>
                            <p>Rate: {bitCoinData[key]['rate']} {getSymbol(key)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CryptoCard