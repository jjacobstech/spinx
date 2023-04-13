import './Nav';

function Nav() {
    return(

        <div id="nav-btns">
        <ul className="nav-btns">
            <li id="home"><a href="./index.html" >Home</a></li>
            <li id="dd1">
                <a href="index.html">Products and Services</a>
                <div className="dd1content">
                    <a href="./index.html">UAV Design</a>
                    <a href="./index.html">Power Systems Design</a>
                    <a href="./index.html">Power Grid Design</a>
                </div>
            </li>
            <li id="dd2">
                <a href="./index.html">Sphinx Labs</a>
                <div className="dd2content">
                    <a href="./index.html">HVAC & HVDC Testing</a>
                    <a href="./index.html">Project Testing & Assessment</a>
                    <a href="./index.html">R&D</a>
                </div>
            </li>
            <li id="dd3">
                <a href="./index.html">Sphinx Hub</a>
                <div className="dd3content">
                    <a href="./index.html">Elements14 Community</a>
                    <a href="./index.html">TechHub</a>
                    <a href="./index.html">HIGHERPOWER</a>
                </div>
            </li>
            <li id="dd4">
                <a href="./index.html">About Us</a>
                <div className="dd4content">
                    <a href="./index.html">Terms&Conditions</a>
                    <a href="./index.html">Copyright Agreements</a>
                    <a href="./index.html">History</a>
                </div>
            </li>
            <li id="dd5">
                <a href="./index.html">Membership</a>
                <div className="dd5content">
                    <a href="./index.html">Sign Up</a>
                    <a href="./index.html">Login</a>
                    <a href="./index.html">Donate/Become a Patreon</a>
                </div>
            </li>
        </ul>
    </div>
    );
}
export default Nav;