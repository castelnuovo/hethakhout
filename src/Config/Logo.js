import orange_logo from 'Assets/images/logo_orange.png';
import green_logo from 'Assets/images/logo_green.png';

const Month = new Date().getMonth() + 1;
const hasOrangeLogo = Month < 4 || Month > 8;
export default hasOrangeLogo ? orange_logo : green_logo;
