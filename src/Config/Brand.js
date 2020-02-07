import orange_logo from 'Assets/images/logo_orange.png';
import orange_loader from 'Assets/videos/loader_orange.gif';
import orange_hero from 'Assets/videos/hero_orange.gif';

import green_logo from 'Assets/images/logo_green.png';
import green_loader from 'Assets/videos/loader_green.gif';

const Month = new Date().getMonth() + 1;
const isOrange = Month < 4 || Month > 8;

export const Hero = isOrange ? orange_hero : orange_hero; // TODO: green hero
export const Logo = isOrange ? orange_logo : green_logo;
export const Loader = isOrange ? orange_loader : green_loader;
