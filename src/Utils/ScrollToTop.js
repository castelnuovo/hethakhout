import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import usePrevious from 'Utils/usePrevious';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const prevPathname = usePrevious(pathname);

    useEffect(() => {
        if (
            (prevPathname && !prevPathname.includes('/impressie')) ||
            !pathname.includes('/impressie')
        ) {
            window.scrollTo(0, 0);
        }
    }, [pathname, prevPathname]);

    return null;
};

export default ScrollToTop;
