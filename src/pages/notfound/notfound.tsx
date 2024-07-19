import "./index.css"

function NotFound() {
  return (
    <>
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! Domain could not be found</p>
        <a className="button" href="#"><i className="icon-home"></i> Go back to Onboarding Page.</a>
        <p className="poweredby">Powered By Fivvia</p>
      </div>
    </>
  )
}

export default NotFound