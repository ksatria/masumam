import Link from 'next/link';
import menus from '../dataset/menu.json';

function Menu(props){
    let menu = props.data;

    if(menu.child === undefined){
        return <Link href={menu.link} key={props.key}><a className="navbar-item">{menu.text}</a></Link>;
    }
    else{
        return (
            <div className="navbar-item has-dropdown is-hoverable">
                <Link href={menu.link} key={props.key}><a className="navbar-link">{menu.text}</a></Link>
                <div className="navbar-dropdown">
                    {menu.child.map((child,index2) => (
                        <Menu data={child} key={index2} />
                    ))}
                </div>
            </div>
        );
    }
}

const Navbar = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>
                
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    {menus.map((menu,index) => (
                        <Menu data={menu} key={index} />
                    ))}
                </div>
                
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary"><strong>Sign up</strong></a>
                            <a className="button is-light">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar;