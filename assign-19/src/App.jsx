import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './layout/main';
import Error from './pages/Error'
import PrivacyPolicyAndTermsOfUse from './pages/PrivacyPolicyAndTermsOfUse';
import ThankYouPage from './pages/ThankYouPage';
import ContactsPage from './pages/ContactsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import UserFrom from './componetnts/userFrom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/checkoutPage';
import ReviewsPage from './pages/reviews';
import ShopPage from './pages/ShopPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/privacy&terms" element={<PrivacyPolicyAndTermsOfUse />} />
        <Route path="/PurchaseCompete" element={<ThankYouPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/Authentication" element={<UserFrom />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  );
};

export default App;
