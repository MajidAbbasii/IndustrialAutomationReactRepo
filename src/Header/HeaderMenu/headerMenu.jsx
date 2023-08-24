//import './headerMenu.css';

const HeaderMenu = () =>{
    return (
                        <div class="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                            <ul class=" nav navbar-nav">
                                {/* <li class="active"> <a href="javascript:;">خانه<i class="fa fa-chevron-down"></i></a> */}
                                <li class="active"> <a href="javascript:;">خانه<i class="fa"></i></a>
                                </li>
                                <li> <a href="javascript:;">گالری<i class="fa"></i></a>
                                </li>
                                <li> <a href="javascript:;">محصولات<i class="fa"></i></a>
                                </li>
                                <li> <a href="javascript:;">پروژه ها<i class="fa"></i></a>
                                </li>
                                <li> <a href="javascript:;">درباره ما<i class="fa"></i></a>
                                </li>
                                <li> <a href="javascript:;">تماس با ما<i class="fa"></i></a>
                                </li>
                            </ul>
                        </div>
    );
};

export default HeaderMenu;