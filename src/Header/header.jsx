import HeaderImage from './HeaderImage/headerImage';
import HeaderSearch from './HeaderSearch/headerSerach';
import HeaderTopBar from './HeaderTopBar/headerTopBar';
import HeaderMenu from './HeaderMenu/headerMenu';

const Header = () => {
    return (
        <header class="site-header header mo-left header-style-5">
            <HeaderTopBar/>
            <div class="sticky-header header-curve main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix ">
                    <div class="container clearfix">
                        <HeaderImage/>
                        <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <HeaderSearch/>
                        <HeaderMenu/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;