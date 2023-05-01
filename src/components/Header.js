function Header({ moonLogo, handleSwitchThem }) {
  return (
    <header>
      <h1>TODO List</h1>
      <div className="icon" src={moonLogo} onClick={handleSwitchThem}></div>
    </header>
  );
}

export default Header;
