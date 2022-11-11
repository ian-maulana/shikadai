import { AppColor, AppFontSize } from '@components/Theme/config';
import { styled } from '@mui/system';

export const Aside = styled('div')({
  width: '250px',
  height: '100vh',
  backgroundColor: '#f4f6f9',
  position: 'fixed',
  top: 0,
  left: 0,
});

export const ListHead = styled('div')({
  fontWeight: 600,
  marginBottom: '5px',
  marginTop: '16px',
  color: AppColor.secondary200,
  fontSize: AppFontSize.s14,
});

export const List = styled('ul')({
  margin: ' 0 0 14px',
  padding: 0,
  listStyle: 'none',
});

export const ListItem = styled('li')({
  padding: '0 24px',
  lineHeight: 1.6,
});
