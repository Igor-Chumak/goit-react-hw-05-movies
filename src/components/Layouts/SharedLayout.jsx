import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavLinkStyled } from './SharedLayout.styled';
import { Loader } from 'components';
//
import ScrollToTop from 'react-scroll-up';
import { ScrollUp } from 'components';

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
      <ScrollToTop showUnder={160}>
        <ScrollUp></ScrollUp>
      </ScrollToTop>
    </div>
  );
};
