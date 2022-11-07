import Sidebar from '@components/Sidebar';

import { Container } from './styles';
interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Container>{children}</Container>
    </>
  );
};

export default Main;
