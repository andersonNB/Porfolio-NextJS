const Layout = ({ children, className = "" }) => {
    return (
        <div className={ `w-full h-full inline-block z-0 bg-lime-300 p-32 ${className}` } >{ children }</div>
    )
}

export default Layout