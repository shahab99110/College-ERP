import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { facultyLogout } from '../redux/action/facultyAction';
import { Sidebar } from './SidebarStyles';
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from '@iconscout/react-unicons';
import Logo from '../assets/images/jh-logo.png'
const FacultySidebar = props => {
  const store = useSelector(store => store);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  useEffect(() => {
    if (store.faculty.faculty.faculty.name) {
      setName(store.faculty.faculty.faculty.name);
    }
  }, [store.faculty.faculty.faculty.name]);
  const logoutHandler = () => {
    dispatch(facultyLogout());
    navigate('/');
  };
  const [selected, setSelected] = useState(0);

  const SidebarData = [
    {
      icon: UilEstate,
      heading: name.toUpperCase(),
      path: '/faculty',
    },
    {
      icon: UilClipboardAlt,
      heading: 'UPDATE PROFILE',
      path: '/faculty/updateProfile',
    },
    {
      icon: UilUsersAlt,
      heading: 'MARK ATTENDANCE',
      path: '/attendenceFaculty',
    },
    {
      icon: UilPackage,
      heading: 'UPLOAD MARKS',
      path: '/faculty/uploadMarks',
    },
    {
      icon: UilChart,
      heading: 'UPDATE PASSWORD',
      path: '/faculty/updatePassword',
    },
  ];

  return (
    <Sidebar>
      {/* logo */}
      <div className='logo'>
        <img src={Logo} alt='' />
        <span>
          JH
        </span>
      </div>
      <div className='menu'>
        {SidebarData.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              <div
                // className={selected === index ? "menuItem active" : "menuItem"}
                className={
                  item.path == pathname ? 'menuItem active' : 'menuItem'
                }>
                <item.icon />
                <span>{item.heading}</span>
              </div>
            </Link>
          );
        })}
        <div className='menuItem' onClick={logoutHandler}>
          <UilSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
    </Sidebar>
  );
};
export default FacultySidebar;
