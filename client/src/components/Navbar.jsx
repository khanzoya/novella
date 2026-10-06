import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ role }) => {
  return (
    <div>
      <nav>
        <div id='nav'>
          <h1>this is Novella</h1>
          <div id='part2'>
            <Link to='/home' className='Navbar-link'>
              Home
            </Link>
            <Link to='/contact' className='Navbar-link'>
              Contact-us
            </Link>

            {role === "admin" && (
              <>
                <Link to='/bookCollection' className='Navbar-link'>
                  Books
                </Link>
                <Link to='/addBooks' className='Navbar-link'>
                  Add Books
                </Link>
                <Link to='/dashboard' className='Navbar-link'>
                  Dashboard
                </Link>
              </>
            )}
            {role === "" ? (
              <>
                {" "}
                <Link to='/login' className='Navbar-link'>
                  Login
                </Link>
                <Link to='/register' className='Navbar-link'>
                  <h5>Register</h5>
                  <div id='hara'></div>
                </Link>
              </>
            ) : (
              <Link to='/logout' className='Navbar-link'>
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* { role !== "user" ?
               
               <Link to="/login" className='Navbar-link'>Login</Link>
                  :
                   <Link to="/logout" className='Navbar-link'>Logout</Link>
              } */
}

{
  /* {role === "user" &&
              <Link to="/home" className='Navbar-link'>Home</Link>
            } */
}

{
  /* <Link to="/register" className='Navbar-link'>
              <h5>Register</h5>
              <div id="hara"></div>
            </Link> */
}
// import React from 'react'
// import '../css/Navbar.css'
// import { Link } from 'react-router-dom'

// const Navbar = ({role}) => {
//   return (
//     <div>
//     <nav>
//          <div id="nav">
//         <h1>this is Novella</h1>
//           <div id="part2" >
//              {/* <Link to="/" className='Navbar-link'>Landing</Link> */}
//                <Link to="/bookCollection" className='Navbar-link'>Books</Link>
//  { role === "admin" && <>
//  <Link to="/addBooks" className='Navbar-link'>Add Books</Link>
//  <Link to="/dashboard" className='Navbar-link'>Dashboard</Link>
//  <Link to="/home" className='Navbar-link'>Home</Link>
//  </>
//  }
//  { role === "" ?

//  <Link to="/login" className='Navbar-link'>Login</Link>
//     :
//      <Link to="/login" className='Navbar-link'>Logout</Link>
// }
//                <Link to="/register" className='Navbar-link'>
//                 <h5>Register</h5>
//                 <div id="hara"></div>
//               </Link>

//         </div>
//       </div>

//     </nav>
//     </div>
//   )
// }

// export default Navbar
