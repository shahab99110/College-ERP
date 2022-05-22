import styled from "styled-components";

export const Cont = styled.div`
  width: 100%;

  /* .overflow-hidden{
  overflow-x:hidden;
} */
  h4.logo {
    color: #ebeef2;
    transform: scale(1.08)
      }
    .navbar {
      background-color: #00adb5 !important;
      /* background-color: #41b3a3 !important; */
      /* background:Red; */
      /* display:flex; */
      /* justify-content:space-between; */
    }
    .nav-link.dropdown-toggle {
      color: #ebeef2;
      color: #05386b;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
      margin: 2px;
      &:hover {
        transform: scale(1.05);
        color: #fff;
      }
      .nav-link.dropdown-toggle:active {
        color: pink;
      }
    }
    li.nav-item {
      font-weight: bold;
      display: flex;
      justify-content: center;
      a button {
        color: #ebeef2;
        color: #05386b;
        /* border-bottom: 5px solid #00adb5;; */
        font-weight: 600;
        transition: all 0.2s ease-in-out;
        margin: 2px;
        &:hover {
          transform: scale(1.05);
          color: #fff;
          /* border-bottom: 5px solid #fff; */
        }
      }
    }
    .logoutBtn {
      font-weight: 600;
      color: #ebeef2;
      border: 2px solid #ebeef2;
      &:hover {
        transform: scale(1.05);
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export const Line = styled.div`
  height: 0.3rem;
  background: white;
  width: 100%;
  width: ${(props) => props.width || 0};
`;
