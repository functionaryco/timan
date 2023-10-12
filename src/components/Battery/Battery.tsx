/** @jsxImportSource theme-ui */
import Head from 'next/head';
import { useState } from 'react';
import { Box, Flex, Input, Text, Image, Button } from 'theme-ui';
import Bar from '../Bar';
import Footer from '../Footer';
import { useStore } from 'src/store/timeStore';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';
import styles from './Battery.module.css';

function Battery() {
  const [modal, setModal] = useState(false);
  const {
    startTime,
    endTime,
    division,
    setStartTime,
    setEndTime,
    setDivision,
  } = useStore();

  var today = new Date();
  var time = today.getHours();
  var minutes = today.getMinutes()

  let arr = new Array();
  for (var i = 0; i < division; i++) {
    arr.push(i);
  }

  const handleTimeChange = (newTimeValue: any) => {
    if (newTimeValue && newTimeValue.length >= 2) {
      setStartTime(newTimeValue[0]);
      setEndTime(newTimeValue[1]);
    }
  };

  const startHour = parseInt(startTime.split(":")[0]);
  const endHour = parseInt(endTime.split(":")[0]);
  

  return (
    <>
      <Head>
        <title>Battery Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {modal && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(50, 37, 37, 0.6)',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
          }}
        >
          <Box
            sx={{
              width: '504px',
              height: '604px',
              position: 'absolute',
              marginTop: '10vh',
              backgroundColor: '#FFFFFF',
              padding: '52px',
              borderRadius: '8px',
              '@media screen and (max-width: 720px)': {
                width: '70vw !important',
                height: '23vh !important',
                marginTop: '10vh !important',
                padding: '30px !important',
                marginLeft: '15vw !important',
              },
            }}
          >
            <Image
              src="https://img.icons8.com/ios/35/d21e1e/multiply.png"
              sx={{
                position: 'absolute',
                cursor: 'pointer',
                right: '0px',
                top: '0px',
              }}
              alt="cross"
              onClick={() => setModal(!modal)}
            />
            <Text
              sx={{
                fontSize: 28,
                fontWeight: '700',
                display: 'flex',
                width: 'max-content',
                paddingBottom: '25px',
              }}
            >
              Update Your Sprint
            </Text>
            <Text
              sx={{
                color: '#00000080',
                width: 'max-content',
                marginBottom: '12px',
              }}
            >
              Select your time range ?
            </Text>
            <div>
              <TimeRangePicker
                onChange={handleTimeChange}
                value={[startTime, endTime]}
                className={styles.Time}
              />
            </div>

            <Text
              sx={{
                color: '#00000080',
                width: 'max-content',
              }}
            >
              How long is the sprint ?
            </Text>
            <Box
              style={{
                display: 'flex',
                marginTop: '12px',
                marginBottom: '28px',
                gap: '12px',
              }}
            >
              <Button onClick={(e) => setDivision(6)} variant="btnSprint">
                Small
              </Button>
              <Button onClick={(e) => setDivision(12)} variant="btnSprint">
                Medium
              </Button>
              <Button onClick={(e) => setDivision(18)} variant="btnSprint">
                Large
              </Button>
              <Input
                placeholder="insert time division"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                type="number"
                sx={{
                  border: '2px solid #000',
                  borderRadius: '4px',
                  background: '#fff',
                  width: '146px',
                  padding: '7px',
                }}
              />
            </Box>

            <button
              sx={{
                textAlign: 'center',
                lineHeight: 'inherit',
                fontSize: 16,
                fontWeight: 700,
                px: 20,
                py: 12,
                border: 0,
                borderRadius: 8,
                backgroundColor: '#000',
                color: '#fff',
              }}
              onClick={() => setModal(!modal)}
            >
              Save Changes
            </button>
          </Box>
        </Box>
      )}

      <Box
        sx={{
          height: '114px',
          borderBottom: '2px solid #4F4F4F',
          width: '100%',
          alignItems: 'center',
          '@media screen and (max-width: 720px)': {
            height: 'auto !important',
          },
        }}
      >
        <Flex
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '36px 0px 26.5px 0px',
            '@media screen and (max-width: 720px)': {
              padding: '16px 0px 16px 0px !important',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                padding: '0px',
                marginLeft: '67px',
                color: '#E0E0E0',
                cursor: 'pointer',
                font: 'Inter',
                fontWeight: '300',
                fontSize: '36px',
                lineHeight: '54px',
                letterSpacing: '0.2%',
                '@media screen and (max-width: 720px)': {
                  fontSize: '26px !important',
                  marginLeft: '0px !important',
                },
              }}
              onClick={() => setModal(!modal)}
            >
              {startTime}
            </Box>
            <Box
              style={{
                marginLeft: '9px',
                fontWeight: '400',
                color: '#828282',
                opacity: '0.5',
              }}
            >{`${startTime >= 12 ? 'PM' : 'AM'}`}</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '87px',
              '@media screen and (max-width: 720px)': {
                marginRight: '0px !important',
              },
            }}
          >
            <Box
              sx={{
                color: '#E0E0E0',
                cursor: 'pointer',
                font: 'Inter',
                fontWeight: '300',
                fontSize: '36px',
                lineHeight: '54px',
                letterSpacing: '0.2%',
                '@media screen and (max-width: 720px)': {
                  fontSize: '26px !important',
                },
              }}
              onClick={() => setModal(!modal)}
            >
              {endTime}
            </Box>
            <Box
              sx={{
                marginLeft: '9px',
                fontWeight: '400',
                color: '#828282',
                opacity: '0.5',
              }}
            >{`${endHour >= 12 ? 'PM' : 'AM'}`}</Box>
          </Box>
        </Flex>
      </Box>
      <Bar arr={arr} startHour={startHour} endHour={endHour} startTime={startTime} endTime={endTime} time={time} minutes={minutes}/>
      <Footer />
    </>
  );
}

export default Battery;
