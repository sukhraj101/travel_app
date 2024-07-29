const url= import.meta.env.VITE_PUBLIC_URL
const HeaderSearch = () => {
  return (
    <div className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5 header_search_section pb-4">
        <form className="w-100">
            <div className="header_search_input_box rounded-4 position-relative">
                <input type="text" placeholder="Search for destination or activities..." aria-label="Search"
                className="header_search_input fs-sm fw-medium" />
                <img src={`${url}/images/common/search_icon.png`} alt="search_icon" className="search_icon" />
            </div>
        </form>
    </div>
  )
}

export default HeaderSearch