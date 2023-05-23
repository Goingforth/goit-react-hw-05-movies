import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    // <Container>
    //   <Header />

    //   <Outlet />
    // </Container>
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default SharedLayout;
