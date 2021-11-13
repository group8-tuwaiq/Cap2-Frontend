import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <div>
    <div class="header-dark">
        <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div class="container"><Link class="navbar-brand" to="home">Website Name</Link><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only"></span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav">
                        <li class="nav-item" role="presentation"><Link class="nav-link" to="books">Books</Link></li>
                        <li class="nav-item" role="presentation"><Link class="nav-link" to="audio">Audio</Link></li>
                        <li class="nav-item" role="presentation"><Link class="nav-link" to="Films">Movies</Link></li>
                        <li class="nav-item" role="presentation"><Link class="nav-link" to="favorite">Favorite</Link></li>
                    </ul>
                    <div className = "login"> 
                    <Link class="login btn btn-light action-button" role="button" to="login">Login</Link>
                    </div>
                    </div> 
            </div>
        </nav>

    </div>
</div>


  );
};


export default Nav;


 

// <div>
//     //   <div class="header-dark">
//     //     <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
//     //       <div class="container">
//     //         <Link class="navbar-brand" to="home">
//     //           {" "}
//     //           web name !{" "}
//     //         </Link>
//     //         <button */
              /* class="navbar-toggler"
               data-toggle="collapse"
               data-target="#navcol-1"
             >
               <span class="sr-only">Toggle navigation</span>
               <span class="navbar-toggler-icon"></span>
             </button> */
    //         <div class="collapse navbar-collapse" id="navcol-1">
    //           <ul class="nav navbar-nav">
    //             <li class="nav-item" role="presentation">
    //               <Link class="nav-link" to="home">
    //                 Home
    //               </Link>
    //             </li>
    //             <li class="nav-item" role="presentation">
    //               <Link class="nav-link" to="books">
    //                 Books
    //               </Link>
    //             </li>
    //             <li class="nav-item" role="presentation">
    //               <Link class="nav-link" to="Films">
    //                 Movies
    //               </Link>
    //             </li>
    //             <li class="nav-item" role="presentation">
    //               <Link class="nav-link" to="audio">
    //                 Audio
    //               </Link>
    //             </li>
    //             <li class="nav-item" role="presentation">
    //               <Link class="nav-link" to="favorite">
    //                 favorite
    //               </Link>
    //             </li>
    //           </ul>
    //           <span class="navbar-text">
    //             <Link
    //               to="#"
    //               class="login btn btn-light action-button"
    //               role="button"
    //             >
    //               Log In
    //             </Link>
    //           </span>
    //           {/* <a class="btn btn-light action-button"  href="#">
    //             Sign Up
    //           </a> */}
    //         </div>
    //       </div>
    //     </nav>
    //     <div class="container hero">
    //       <div class="row"></div>
    //     </div>
    //     <br></br>
    //     <br></br>
    //   </div>
    //  </div> 

