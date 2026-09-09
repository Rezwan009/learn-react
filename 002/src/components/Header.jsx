export default function Header() {
  return (
    <header>
      <nav className="header">
        <div className="logo">
          <img src="./src/assets/react.svg" alt="React logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
