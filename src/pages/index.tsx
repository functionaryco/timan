/* eslint-disable react/jsx-pascal-case */
import { Text, Themed } from 'theme-ui';
import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';
import Battery from 'src/components/Battery';

const HomePage = () => (
  <>
    <Text as="h1">Homepage</Text>
    <Battery/>
  </>
);

export default HomePage;
