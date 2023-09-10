import './header.css';

function Header() {
	return (
		<div className="App">
			<div className="header-spacer"></div>
			<header className="header">
				<a class="logo" href="index.html"></a>
				<div class="linkbox">
					<a
						class="linkbox-item"
						style={{ marginLeft: 20 + 'vw' }}
						href="products.html"
					>
						<span>Nasze produkty</span>
					</a>
					<a class="linkbox-item" href="about.html">
						<span>O nas</span>
					</a>
					<a class="linkbox-item" href="dealer.html">
						<span>Znajdź sprzedawcę</span>
					</a>
					<a class="linkbox-item" href="downloads.html">
						<span>Moje Westbo</span>
					</a>
				</div>
			</header>
		</div>
	);
}

export default Header;
