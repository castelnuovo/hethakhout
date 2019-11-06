import orange_logo from 'Assets/images/logo_orange.png';
import green_logo from 'Assets/images/logo_green.png';

const Month = new Date().getMonth() + 1;
let Logo = green_logo;

if (Month < 4 || Month > 8) {
    Logo = orange_logo;
}

export default Logo;
