import "./footer.css"
import fLogo from "./../../../../public/images/common/fivvia.png"

const Footer = () => {
  return (
    <div className="common-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer-text">
              <span>Powered by:</span> <img src={fLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer