/** @jsxImportSource theme-ui */
import React from 'react'
import { Box, Text } from 'theme-ui'

function Footer() {
    return (
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: "47px", flexDirection: 'row', gap: 'auto' }}>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: '21px' }}
                sx={{
                    '@media screen and (max-width: 720px)': {
                        gap: '10px !important'
                    },
                }}>
                <Box style={{ width: '29px', height: '29px', backgroundColor: "#4F4F4F", borderRadius: '50%' }}
                    sx={{
                        '@media screen and (max-width: 720px)': {
                            height: '19px !important'
                        },
                    }}
                ></Box>
                <Text style={{ width: '364px', height: "27px", fontFamily: 'Inter', fontWeight: '400', fontSize: '22px', lineHeight: '27px', color: "#fff" }}
                    sx={{
                        '@media screen and (max-width: 720px)': {
                            fontSize: '18px !important',
                            width: "264px !important"
                        },
                    }}
                >Koramangala Thirdwave Coffeshop</Text>
            </Box>
            <Text style={{ width: '52px', height: "17px", fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '17px', color: "#fff", opacity: "0.5" }}
                sx={{
                    '@media screen and (max-width: 720px)': {
                        fontSize: '18px !important',
                    },
                }}
            >Change</Text>
        </Box>
    )
}

export default Footer