import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Box, Container, Flex, Input, NavLink, Text } from 'theme-ui';
import Bar from './Bar';
import Footer from './Footer';

const Index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const Slots = Index.map((hour) => {
    return `${hour < 10 ? "0" + hour : hour}`
});

function Battery() {
    const [modal, setModal] = useState(false)
    const [startTime, setStartTime] = useState<any>("00")
    const [endTime, setEndTime] = useState<any>("24")
    const [division, setDivision] = useState<any>("24");
    var today = new Date();
    var time = 15;
    // var min = today.getMinutes();
    const hour = ((endTime - time) / (endTime - startTime)) * 100;
    let arr = new Array();
    for (var i = 1; i <= division; i++) {
        arr.push(i);
    }
    useEffect(() => {
        localStorage.setItem("Time", JSON.stringify({ startTime, endTime }));
    }, [hour])


    return (
        <>
            <Head>
                <title>Battery Status</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {modal &&
                <Box style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: "rgba(50, 37, 37, 0.6)", top: "0", bottom: "0", left: '0', right: '0' }}>
                    <Box style={{ width: '30vw', height: '30vh', position: 'absolute', marginTop: "30vh", backgroundColor: '#E4E4E4', padding: '50px', marginLeft: "10vw", borderRadius: '8px' }}>
                        <img src="https://img.icons8.com/ios/35/d21e1e/multiply.png" style={{ position: 'absolute', cursor: 'pointer', right: '0px', top: '0px' }} alt="cross" onClick={() => setModal(!modal)} />
                        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box style={{ display: 'flex', flexDirection: 'column' }}>
                                <Text color='black'>Start Time</Text>
                                <select name="slot" className="weekday" value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                                    <option disabled={true} selected={true} value={""}>Choose Your Start Time</option>
                                    {Slots.map((slot) =>
                                        <option value={slot} key={slot}>{slot}</option>
                                    )}
                                </select>
                            </Box>
                            <Box style={{ display: 'flex', flexDirection: 'column' }}>
                                <Text color='black'>End Time</Text>
                                <select name="slot" className="weekday" value={endTime} onChange={(e) => setEndTime(e.target.value)}>
                                    <option disabled={true} selected={true} value={""}>Choose Your End Time</option>
                                    {Slots.map((slot) =>
                                        <option value={slot} key={slot}>{slot}</option>
                                    )}
                                </select>
                            </Box>
                        </Box>
                        <Input placeholder='insert time division' value={division} onChange={(e) => setDivision(e.target.value)} type="number" style={{ width: "100%", marginTop: '42px', backgroundColor: 'white', color: 'black' }} />
                    </Box>
                </Box>
            }
            <Box style={{ height: '114px', borderBottom: '2px solid #4F4F4F', width: "100%", alignItems: 'center' }}>
                <Flex style={{ display: 'flex', justifyContent: 'space-between', padding: "36px 0px 26.5px 0px" }}>
                    <Box style={{ padding: "0px", marginLeft: '67px', color: '#E0E0E0', cursor: 'pointer', font: 'Inter', fontWeight: "300", fontSize: '36px', lineHeight: '54px', letterSpacing: '0.2%' }} onClick={() => setModal(!modal)}>{startTime}</Box>
                    <Box p={2} style={{ color: "#E0E0E0", marginRight: "87px", cursor: 'pointer', font: 'Inter', fontWeight: "300", fontSize: '36px', lineHeight: '54px', letterSpacing: '0.2%' }}
                        onClick={() => setModal(!modal)}
                    >{endTime}</Box>
                </Flex>
            </Box>
            <Bar hour={hour} arr={arr} division={division} />
            <Footer />
        </>
    )
}

export default Battery