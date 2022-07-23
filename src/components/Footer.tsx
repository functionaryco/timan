import React from 'react'
import { Box, Text } from 'theme-ui'

function Footer() {
    return (
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: "47px" }}>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: '21px' }}>
                <Box style={{ width: '29px', height: '29px', backgroundColor: "#4F4F4F", borderRadius: '50%' }}></Box>
                <Text style={{ width: '364px', height: "27px", fontFamily: 'Inter', fontWeight: '400', fontSize: '22px', lineHeight: '27px', color: "#fff" }}>Koramangala Thirdwave Coffeshop</Text>
            </Box>
            <Text style={{ width: '52px', height: "17px", fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '17px', color: "#fff", opacity: "0.5" }}>Change</Text>
        </Box>
    )
}

export default Footer