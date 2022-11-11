import { styled } from '@mui/system';

export const Container = styled('div')({
  paddingTop: 5,
  paddingLeft: 0,
  paddingRight: 0,
  marginTop: 24,
  marginBottom: 16,
  marginLeft: 16,
  marginRight: 16,
  // transition: 'all 0.3s',
  maxWidth: '100%',

  '@media(min-width: 992px)': {
    paddingLeft: 270,
    maxWidth: '50%',
  },
});
