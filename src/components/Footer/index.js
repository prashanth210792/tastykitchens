import './index.css'
import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-page-log-container">
        <img
          src="https://res.cloudinary.com/dusiydn2q/image/upload/v1666771940/Tasty%20Kitchen/VectorlogoWhite_nyxd4o.png"
          alt="website-footer-logo"
        />
        <h1 className="footer-logo-name">Tasty Kitchens</h1>
      </div>
      <p className="footer-para">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="footer-logs-container">
        {/* <FaPinterestSquare />
        <FaInstagram />
        <FaTwitter />
        <FaFacebookSquare /> */}

        {/* <FaPinterestSquare testid="pintrest-social-icon" />
        <FaInstagram testid="instagram-social-icon" />
        <FaTwitter testid="twitter-social-icon" />
        <FaFacebookSquare testid="facebook-social-icon" /> */}

        <div testid="pintrest-social-icon">
          <FaPinterestSquare />
        </div>
        <div testid="instagram-social-icon">
          <FaInstagram />
        </div>
        <div testid="twitter-social-icon">
          <FaTwitter />
        </div>
        <div testid="facebook-social-icon">
          <FaFacebookSquare />
        </div>
      </div>
    </div>
  )
}
