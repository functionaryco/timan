import Link from 'next/link';
import { Container, Flex, NavLink } from 'theme-ui';

export default function Header() {
  return (
    // see theme.layout.container for styles
    <Container as="header">
      <Flex as="nav">
        {/* passHref is required with NavLink */}
        <Link href="/" passHref>
          <NavLink p={2}>Home</NavLink>
        </Link>
        <Link href="/style" passHref>
          <NavLink p={2}>Style Guide</NavLink>
        </Link>
      </Flex>
    </Container>
  );
}

