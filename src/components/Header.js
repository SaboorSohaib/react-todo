import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    fontSize: '6rem',
    fontWeight: '600',
    marginBottom: '2rem',
    lineHeight: '1em',
    color: '#ececec',
    textTransform: 'lowercase',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle}>
      <h1>Todos</h1>
    </header>
  );
};

export default Header;
