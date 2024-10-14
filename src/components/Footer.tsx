export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper max-width">
        <section className="footer__info">
          <h3>Information</h3>
          <p>Contact us</p>
          <p>FAQ</p>
          <p>Terms and conditions</p>
          <p>Delivery</p>
        </section>
        <section className="footer__about">
          <h3>About us</h3>
          <p>About Figment</p>
          <p>Our stores</p>
          <p>Careers</p>
        </section>
        <section className="footer__discover">
          <h3>Discover</h3>
          <p>Categories</p>
          <p>Brands</p>
        </section>
        <div className="footer__socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-x-twitter"></i>
        </div>
        <p className="footer__copyright">&#169; 2024 Figment AB, Org.Nr: 123456-7890</p>
      </div>
    </footer>
  );
}
