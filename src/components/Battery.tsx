import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Box, Container, Input, Text } from 'theme-ui';
import Bar from './Bar';
import Percentage from './Percentage';
import Time from './Time';

const Index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const Slots = Index.map((hour) => {
    return `${hour < 10 ? "0" + hour : hour}`
});

function Battery() {
    const [startTime, setStartTime] = useState<any>("")
    const [endTime, setEndTime] = useState<any>("")
    const [division, setDivision] = useState<any>();
    var today = new Date();
    var time = today.getHours()
    var min = today.getMinutes();
    const hour = ((endTime - time) / (endTime - startTime)) * 100;
    let arr = new Array();
    for (var i = 1; i <= division; i++) {
        arr.push(i);
    }
    useEffect(() => {
        localStorage.setItem("Time", JSON.stringify({ startTime, endTime }));
    }, [hour])


    return (
        <Container style={{ width: '70vw' }}>
            <Head>
                <title>Battery Status</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "30px" }}>
                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text color='black'>Start Time</Text>
                    <select name="slot" className="weekday" value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                        <option disabled={true} selected={true} value={""}>Choose Your Start Time</option>
                        {Slots.map((slot) =>
                            <option value={slot} key={slot}>{slot}</option>
                        )}
                    </select>
                </Box>
                <hr style={{ height: "1px", backgroundColor: "#D21E1E", width: "100%", border: 'none', margin: '10px' }} />
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
            <Input placeholder='insert time division' value={division} onChange={(e) => setDivision(e.target.value)} type="number" style={{ width: "100%" }} />
            <Bar hour={hour} arr={arr} division={division} />
        </Container>
    )
}

export default Battery