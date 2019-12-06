import React from 'react';
import styled from 'styled-components';
import HeaderPhoto from './HeaderPhoto';
import Header from './Header';

const AppUnstyled = ({ className }) => {
  return (
    <div className={className}>
      <Header>
        <HeaderPhoto />
      </Header>
    </div>
  );
}

const App = styled(AppUnstyled)`

`;

export default App;
