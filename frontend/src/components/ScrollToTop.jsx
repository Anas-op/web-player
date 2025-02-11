import React from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({children}) => {
    let location = useLocation();
    React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
    return children;
}


export default ScrollToTop;