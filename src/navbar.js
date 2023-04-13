import './navbar';

function Navbar() {
    return <div id="links" class=" row mb-5 w-100" style=" display: flex ;justify-content: space-between; text-align: center;
          
        ">
        <div class="col-6 bg-light" style="border-radius: 50px; margin-left: 30px;">
            <img src="assets/icons-03-03.svg" alt="" srcset="" style="width: 50px; height: 40px" />
        </div>
        <div class="col-1"><a href="">Discover</a></div>
        <div class="col-1"><a href="">Pricing</a></div>
        <div class="col-1"><a href="http://" target="_blank" rel="noopener noreferrer">Support</a></div>
        <div class="col-2" style="display: block"><a href="">Login</a> | <b><a href="http://" target="_blank"
            rel="noopener noreferrer">Signup</a></b></div>
    </div>
};

export default Navbar;