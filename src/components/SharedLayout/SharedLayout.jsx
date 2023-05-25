import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
export default SharedLayout;
