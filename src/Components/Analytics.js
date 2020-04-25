import useAckee from 'use-ackee';
import { useLocation } from 'react-router-dom';
import Ackee from 'Config/Ackee';

const Analytics = () => {
    const { pathname } = useLocation();

    useAckee(pathname, Ackee.server, Ackee.options);

    return null;
};

export default Analytics;
