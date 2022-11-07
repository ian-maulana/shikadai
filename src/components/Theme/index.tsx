import { ThemeProvider } from '@mui/system';
import { CacheProvider, Global } from '@emotion/react';

import createCache from '@emotion/cache';

import { config, theme } from './config';

interface Props {
  children: React.ReactNode;
}

const cache = createCache({ key: 'next' });
const Theme: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CacheProvider value={cache}>
        <Global styles={config} />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default Theme;
