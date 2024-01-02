import { NavLink } from "react-router-dom"

const navItems = () =>{

    return(
        <>
        <li>
              <details>
                <summary>Assignment  Required pages</summary>
                <ul className="p-2">
                  <li><NavLink to='/Home'>HomePage</NavLink></li>
                  <li><NavLink to='/products'>ProductsPage</NavLink></li>
                  <li><NavLink to='/contacts'>ContactsPage</NavLink></li>
                  <li><NavLink to='/cart'>CartPage</NavLink></li>
                  <li><NavLink to='/checkout'>CheckoutPage</NavLink></li>
                  <li><NavLink to='/PurchaseCompete'>ThankPouPage</NavLink></li>
                  <li><NavLink to='anyWrongRoute'>404 page</NavLink></li>
                  <li><NavLink to='/faq'>FAQ</NavLink></li>
                  <li><NavLink to='/reviews'>reviews or cases</NavLink></li>
                  <li><NavLink to='/products'>searchResultsPage</NavLink></li>
                  <li><NavLink to='/privacy&terms'>privacy&terms</NavLink></li>
                  <li><NavLink to='/Authentication'>AccountRegistration Page</NavLink></li>
                  <li><NavLink to='/blog'>BlogPage</NavLink></li>

                </ul>
              </details>
            </li>
            <li ><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/shop'>shop</NavLink></li>
            <li><NavLink to='/contacts'>contacts</NavLink></li>
            <li><NavLink to='/blog'>blog</NavLink></li>
            </>

    )
}

export default navItems
