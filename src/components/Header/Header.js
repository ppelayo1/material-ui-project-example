import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import TypoGraphy from '@material-ui/core/Typography';

function Header() {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <TypoGraphy
          variant="h1"
          color="inherit"
        >
          My header
        </TypoGraphy>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
