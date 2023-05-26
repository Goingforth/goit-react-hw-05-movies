import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
export default SharedLayout;
