/** @jsxImportSource theme-ui */

import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Box, Container, Flex, Input, NavLink, Text } from 'theme-ui';
import Bar from './Bar';
import Footer from './Footer';

const Index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const Slots = Index.map((hour) => {
    return `${hour < 10 ? "0" + hour : hour}`
});

function Battery() {
    const [modal, setModal] = useState(false)
    const [startTime, setStartTime] = useState<any>("06")
    const [endTime, setEndTime] = useState<any>("18")
    const [division, setDivision] = useState<any>("24");
    var today = new Date();
    var time = today.getHours();
    var AmOrPm1 = startTime >= 12 ? "PM" : "AM";
    var AmOrPm2 = endTime >= 12 ? "PM" : "AM";
    const hour = ((endTime - time) / (endTime - startTime)) * 100;
    let arr = new Array();
    for (var i = 1; i <= division; i++) {
        arr.push(i);
    }
    useEffect(() => {
        localStorage.setItem("Time", JSON.stringify({ startTime, endTime, division }));
    }, [hour, division])


    return (
        <>
            <Head>
                <title>Battery Status</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {modal &&
                <Box style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: "rgba(50, 37, 37, 0.6)", top: "0", bottom: "0", left: '0', right: '0' }}>
                    <Box style={{ width: '30vw', height: '30vh', position: 'absolute', marginTop: "30vh", backgroundColor: '#E4E4E4', padding: '50px', marginLeft: "10vw", borderRadius: '8px' }}   sx={{
                            '@media screen and (max-width: 720px)': {
                               width: '70vw !important', height: '23vh !important',marginTop:"10vh !important",
                               padding:'30px !important',
                               marginLeft:'15vw !important'
                            },
                        }}>
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
                        <Input placeholder='insert time division' value={division} onChange={(e) => setDivision(e.target.value)} type="number" style={{ width: "100%", marginTop: '42px', backgroundColor: 'white', color: 'black' }}
                          sx={{
                            '@media screen and (max-width: 720px)': {
                              marginTop:"22px !important",
                            },
                        }}
                         />
                    </Box>
                </Box>
            }
            <Box style={{ height: '114px', borderBottom: '2px solid #4F4F4F', width: "100%", alignItems: 'center' }}
                sx={{
                    '@media screen and (max-width: 720px)': {
                        height: 'auto !important'
                    },
                }}
            >
                <Flex style={{ display: 'flex', justifyContent: 'space-between', padding: "36px 0px 26.5px 0px" }}
                    sx={{
                        '@media screen and (max-width: 720px)': {
                            padding: "16px 0px 16px 0px !important"
                        },
                    }}
                >
                    <Box style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                        <Box style={{ padding: "0px", marginLeft: '67px', color: '#E0E0E0', cursor: 'pointer', font: 'Inter', fontWeight: "300", fontSize: '36px', lineHeight: '54px', letterSpacing: '0.2%' }} onClick={() => setModal(!modal)}
                            sx={{
                                '@media screen and (max-width: 720px)': {
                                    fontSize: '26px !important',
                                    marginLeft: '0px !important'
                                },
                            }}
                        >{`${(startTime % 12) || "12"}:00`}</Box>
                        <Box style={{ marginLeft: '9px', fontWeight: '400', color: '#828282', opacity: '0.5' }}>{AmOrPm1}</Box>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginRight: "87px" }}
                        sx={{
                            '@media screen and (max-width: 720px)': {
                                marginRight: '0px !important'
                            },
                        }}>
                        <Box style={{ color: "#E0E0E0", cursor: 'pointer', font: 'Inter', fontWeight: "300", fontSize: '36px', lineHeight: '54px', letterSpacing: '0.2%' }}
                            onClick={() => setModal(!modal)}
                            sx={{
                                '@media screen and (max-width: 720px)': {
                                    fontSize: '26px !important',
                                },
                            }}
                        >{`${(endTime % 12) || "12"}:00`}</Box>
                        <Box style={{ marginLeft: '9px', fontWeight: '400', color: '#828282', opacity: '0.5' }}>{AmOrPm2}</Box>
                    </Box>
                </Flex>
            </Box>
            <Bar hour={hour} arr={arr} division={division} />
            <Footer />
        </>
    )
}

export default Battery