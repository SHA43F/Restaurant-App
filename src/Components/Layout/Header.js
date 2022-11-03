import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Restaurant</h1>
      <button className="button">
        Your Cart
        <badge className="badge">0</badge>
      </button>
    </header>
  );
};

export default Header;
