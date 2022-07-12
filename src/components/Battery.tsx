import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Input } from 'theme-ui';
import Bar from './Bar';
import Percentage from './Percentage';
import Time from './Time';

function Battery() {
    const [hour, setHour] = useState<any>(12);
    var today = new Date();
    var time = today.getHours();
    var min = today.getMinutes();
    let arr = new Array();
    for (var i = 1; i < hour; i++) {
        arr.push(i);
    }
    return (
        <div style={{ width: '70vw' }}>
            <Head>
                <title>Battery Status</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Input placeholder='insert time format 12 or 24' value={hour} onChange={(e) => setHour(e.target.value)} type="number" style={{ width: "100%" }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Time hour={hour} time={time} min={min} />
                <Percentage time={time} hour={hour} />
            </div>
            <Bar hour={hour} time={time} arr={arr} />
        </div>
    )
}

export default Battery