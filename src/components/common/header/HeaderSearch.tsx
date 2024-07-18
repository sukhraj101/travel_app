
const HeaderSearch = () => {
  return (
    <div className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5 header_search_section">
        <form className="w-100">
            <div className="header_search_input_box rounded-4">
                <input type="text" placeholder="Search for destination or activities..." aria-label="Search"
                className="header_search_input fs-sm fw-medium" />
            </div>
        </form>
    </div>
  )
}

export default HeaderSearch