import { useState, useEffect, useRef } from 'react';
import * as tutorsAPI from '../../utilities/tutors-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './NewOrderPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import SubjectList from '../../components/SubjectList/SubjectList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuTutors, setMenuTutors] = useState([]);
  const [activeSub, setActiveSub] = useState('');
  const [cart, setCart] = useState(null);
  const subjectsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getTutors() {
      const tutors = await tutorsAPI.getAll();
      //This reduce is looping through our tutors and collecting all the subjects that exist.
      subjectsRef.current = tutors.reduce((subs, tutor) => {
        const sub = tutor.subject.name;
        //It will not duplicate the subjects
        return subs.includes(sub) ? subs : [...subs, sub];
      }, []);
      setMenuTutors(tutors);
      setActiveSub(subjectsRef.current[0]);
    }
    getTutors();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToOrder(tutorId) {
    const updatedCart = await ordersAPI.addTutorToCart(tutorId);
    setCart(updatedCart);
  }

  async function handleChangeQty(tutorId, newHoursQty) {
    const updatedCart = await ordersAPI.setHoursQtyInCart(tutorId, newHoursQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className={styles.NewOrderPage}>
      <aside>
        <Logo />
        <SubjectList
          subjects={subjectsRef.current}
          activeSub={activeSub}
          setActiveSub={setActiveSub}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuTutors={menuTutors.filter(tutor => tutor.subject.name === activeSub)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}