import styled from "styled-components";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 4rem;
  transition: all 300ms ease;
  .menu > a {
    color: inherit;
    text-decoration: none;
  }

  .logo {
    display: flex;
    height: 5rem;
    font-weight: bold;
    font-size: 22px;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 4%;
  }
  .logo > img {
    height: 5rem;
  }
  .logo > span {
    font-size: 4rem;
  }
  .logo > span > span {
    color: pink;
  }
  .menu {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .menuItem {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 2.5rem;
    margin-left: 2rem;
    position: relative;
    transition: all 300ms ease;
    font-size: 14px;
  }
  .menuItem:hover {
    cursor: pointer;
  }
  .active {
    background: pink;
    margin-left: 0;
  }
  .active::before {
    content: "";
    width: 8px;
    margin-right: calc(1rem - 8px);
    height: 100%;
    background: red;
  }
`;
