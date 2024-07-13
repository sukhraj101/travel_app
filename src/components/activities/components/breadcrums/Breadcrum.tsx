
const Breadcrum = () => {
  return (
    <nav aria-label="Breadcrumb" className="my-4">
        <ol className="breadcrumb">
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