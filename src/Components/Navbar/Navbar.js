import React, { Component } from 'react'
import { MenuItems } from "./Menuitems"
import './Navbar.css'

class Navbar extends Component {
   state = { clicked: false }

   handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
   }

   //    componentDidMount() {
   //       window.addEventListener("resize", this.resize.bind(this));
   //       if(window.innerWidth >= 500)
   //       this.resize();
   //   }

   //   resize() {
   //       this.setState({clicked: window.innerWidth <= 500});
   //   }
   render() {
      return (
         <nav className='NavbarItems'>
            <h1 className='navbar-logo'>
               React <i className='fa fa-react'></i>
            </h1>
            <div className='menu-icon' onClick={this.handleClick}>
               <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
               {MenuItems.map((item, index) => {
                  return (
                     <li key={index}>
                        <a className={item.cName} href={item.url}>
                           {item.title}
                        </a>{item.subItem[0].title != undefined &&
                           <ul>
                              {item.subItem.map((item, index) => {
                                 return (

                                    <li key={index}>
                                       <a className={item.cName} href={item.url}>
                                          {item.title}
                                       </a>
                                    </li>
                                 )
                              })
                              }
                           </ul>
                        }
                     </li>
                  )
               })}
            </ul>
         </nav>
      )
   }
}

export default Navbar