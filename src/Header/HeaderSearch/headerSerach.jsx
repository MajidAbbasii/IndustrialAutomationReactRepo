//import './headerSearch.css';

const HeaderSearch = () =>{
    return (
    <div>
        <div class="extra-nav">
            <div class="extra-cell">
                <button id="quik-search-btn" type="button" class="site-button"><i class="fa fa-search"></i></button>
            </div>
        </div>
        <div class="dez-quik-search bg-primary">
            <form action="#">
                <input name="search" value="" type="text" class="form-control" placeholder="جستجو"/>
                <span  id="quik-search-remove"><i class="fa fa-remove"></i></span>
            </form>
        </div>
    </div>
    );
};

export default HeaderSearch;