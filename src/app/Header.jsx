"use client";
import styled from "styled-components";

// export default function Header({ children, name, onClick, data }) {
//   return <HeaderTag onClick={onClick}>{children}</HeaderTag>;
// }

export default styled.div`
  background: #1e1e1e; 

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;
`;
