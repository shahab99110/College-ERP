import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout } from '../redux/action/adminAction';
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
const AdminSidebar = props => {
  const store = useSelector(store => store);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  useEffect(() => {
    if (store.admin.admin.name) {
      setName(store.admin.admin.name);
    }
  }, [store.admin.admin.name]);
  const logoutHandler = () => {
    dispatch(adminLogout());
    navigate('/');
  };
  const [selected, setSelected] = useState(0);

  const SidebarData = [
    {
      icon: UilEstate,
      heading: name.toUpperCase(),
      path: '/admin',
    },
    {
      icon: UilClipboardAlt,
      heading: 'ADD FACULTY',
      path: '/admin/addFaculty',
    },
    {
      icon: UilUsersAlt,
      heading: 'ADD STUDENT',
      path: '/admin/addStudent',
    },
    {
      icon: UilPackage,
      heading: 'ADD SUBJECT',
      path: '/admin/addSubject',
    },
    {
      icon: UilChart,
      heading: 'ADD ADMIN',
      path: '/admin/addAdmin',
    },
    {
      icon: UilChart,
      heading: 'OUR FACULTIES',
      path: '/admin/allFaculties',
    },
    {
      icon: UilChart,
      heading: 'OUR STUDENTS',
      path: '/admin/allStudents',
    },
    {
      icon: UilChart,
      heading: 'SUBJECTS',
      path: '/admin/allSubjects',
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
export default AdminSidebar;
