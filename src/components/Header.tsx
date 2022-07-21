import Link from 'next/link';
import { Box, Container, Flex, NavLink } from 'theme-ui';

export default function Header() {
  return (
    <Box style={{ height: '114px', borderBottom: '2px solid #D9D9D9', width: "100%", alignItems: 'center' }}>
      <Flex style={{ display: 'flex', justifyContent: 'space-between', padding: "37px" }}>
        <NavLink style={{ padding: "0px", marginLeft: '116px', color: 'black' }} p={2}>Timar</NavLink>
        <NavLink p={2} style={{ padding: '12px 24px', backgroundColor: '#E0E0E0', color: "black", font: 'Europa-Regular', fontWeight: '400', lineHeight: '16px', marginRight: "60px" }}>Manage</NavLink>
      </Flex>
    </Box>
  );
}

