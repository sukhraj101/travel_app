import "./footer.css"
const fLogo = import.meta.env.VITE_PUBLIC_URL

const Footer = () => {
  return (
    <div className="common-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer-text">
              <span>Powered by:</span> <img src={`${fLogo}/images/common/fivvia.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer