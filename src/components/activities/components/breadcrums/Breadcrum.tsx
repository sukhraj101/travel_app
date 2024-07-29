import { useNavigate } from "react-router-dom"
import "./breadcrums.css"

const Breadcrum = () => {
  let navigate = useNavigate();
  return (
    <nav aria-label="Breadcrumb" className="mt-4">
        <ol className="breadcrumb">
            <li>
              <button className="go-back-btn" onClick={() => (navigate(-1))}>
                <svg className="bi" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                </svg>
              </button>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-decoration-none fs-xs fw-normal breadcrum-links text-black">Things to Do in Jeddah ·</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="#" className="text-decoration-none fs-xs fw-bold breadcrum-links text-black" aria-current="page">Jeddah Tours</a>
            </li>
        </ol>
    </nav>
  )
}

export default Breadcrum