import './footer.css';

function Footer() {
	return (
		<div className="App">
			<footer class="footer">
				<div class="footer-row">
					<div class="footer-column" style={{ paddingLeft: 20 + 'px' }}>
						<h3>Adres fabryki</h3>
						<p style={{ marginTop: 10 + 'px' }}>
							Westbo of Sweden AB
							<br />
							Box 5<br />
							333 03 Reftele, Szwecja
						</p>
					</div>
					<div class="footer-column" style={{ paddingRight: 20 + 'px' }}>
						<h3>Adres siedziby</h3>
						<p style={{ marginTop: 10 + 'px' }}>
							Przyjaciół żołnierza 4<br />
							lok. 57
							<br />
							71-670 Szczecin, Polska
						</p>
					</div>
					<div class="footer-column" style={{ paddingLeft: 20 + 'px' }}>
						<h3>Kontakt</h3>
						<p style={{ marginTop: 10 + 'px' }}>
							Tel. +48 728 688 689 - Beata Zenta-Seńków, sales manager
							<br />
							Tel. +48 602 228 485 - Karolina Eliasz, sales manager
							<br />
							biuro@westbo.pl
						</p>
					</div>
					<div class="footer-column" style={{ paddingRight: 20 + 'px' }}>
						<h3>Śledź nas</h3>
						<div class="social-media">
							<a
								href="https://www.facebook.com/WestboPoland/"
								class="facebook"
							></a>
							<a
								href="https://www.instagram.com/kominki_westbo/"
								class="instagram"
							></a>
							<a
								href="https://www.youtube.com/channel/UCH29Au4PltIEs6iaBw97Dog"
								class="youtube"
							></a>
						</div>
					</div>
					<a href="index.html" class="logo-footer"></a>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
