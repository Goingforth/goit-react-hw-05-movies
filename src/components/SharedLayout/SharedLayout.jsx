import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default SharedLayout;
