import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavLinkStyled } from './SharedLayout.styled';
import { Loader } from 'components';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="movies">Movies</NavLinkStyled>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
