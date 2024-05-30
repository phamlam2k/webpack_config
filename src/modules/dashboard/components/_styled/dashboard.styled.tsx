import styled from '@emotion/styled'

export const LayoutStyled = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`
export const SideBarStyled = styled.div`
  font-family: 'SaraBunRegular';
  width: 240px;
  height: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }

  a.active {
    font-family: 'SaraBunBold';
    background-color: #555;
    color: #fff;
  }
`
