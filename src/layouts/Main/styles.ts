import { styled } from '@mui/system';

export const Container = styled('div')({
  maxWidth: '100%',

  '@media(min-width: 992px)': {
    paddingLeft: '250px',
    maxWidth: '100%',
  },
});
