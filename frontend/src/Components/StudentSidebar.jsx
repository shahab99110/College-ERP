import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { studentLogout } from '../redux/action/studentAction';
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
const StudentSidebar = props => {
  const store = useSelector(store => store);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  useEffect(() => {
    if (store.student.student.student.name) {
      setName(store.student.student.student.name);
    }
  }, [store.student.student.student.name]);
  const logoutHandler = () => {
    dispatch(studentLogout());
    navigate('/');
  };
  const [selected, setSelected] = useState(0);

  const SidebarData = [
    {
      icon: UilEstate,
      heading: name.toUpperCase(),
      path: '/student',
    },
    {
      icon: UilClipboardAlt,
      heading: 'UPDATE PROFILE',
      path: '/student/updateProfile',
    },
    {
      icon: UilUsersAlt,
      heading: 'ATTENDANCE',
      path: '/student/attendence',
    },
    {
      icon: UilPackage,
      heading: 'TEST PERFORMANCE',
      path: '/student/testPerformance',
    },
    {
      icon: UilPackage,
      heading: 'FEES',
      path: '/student/getStudentFees',
    },
    {
      icon: UilChart,
      heading: 'STUDENT SUBJECT LIST',
      path: '/student/getAllSubjects',
    },
    {
      icon: UilChart,
      heading: 'UPDATE PASSOWRD',
      path: '/student/updatePassword',
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
export default StudentSidebar;
