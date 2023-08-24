import './headerTopBar.css';

const HeaderTopBar = () =>{
    return (
        <div class="top-bar">
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="dez-topbar-left"> </div>
                    <div class="dez-topbar-right">
                        <ul class="social-bx list-inline pull-right">
                            <li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
                            <li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
                            <li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li></ul>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HeaderTopBar;