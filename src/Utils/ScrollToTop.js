import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import usePrevious from 'Utils/usePrevious';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const prevPathname = usePrevious(pathname);

    useEffect(() => {
        console.log('prevPath', prevPathname);
        console.log('path', pathname);

        if (prevPathname && !prevPathname.includes('/impressie')) {
            if (!pathname.includes('/impressie')) {
                window.scrollTo(0, 0);
            }
        }

        // if (!pathname.includes('/impressie')) {
        //     window.scrollTo(0, 0);
        // }
    }, [pathname, prevPathname]);

    return null;
};

export default ScrollToTop;
