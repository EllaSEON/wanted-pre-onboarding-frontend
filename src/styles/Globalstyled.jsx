import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  :root {
    --main-color:#FFB6B0;
    --main-disabled-color:#c8beab;
    --main-text-color:#ffffff;
    --sub-text-color:#767676;
    --border-color:#bdbdbd;
  }
  html {
    font-size: 10px;
  }

  body {
    background-color: #FFDCD9;
    font-family: 'NanumSquareNeo-Variable';
    font-weight: 400;
    /* 배경과 구분하려고 색 넣었습니다. */
  }

  * {
    box-sizing: border-box;
  }
  
  button{
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer;
    font: inherit;
    
  }
  a {
    color: #fff; 
    text-decoration: none; 
    outline: none
  }
  .hidden {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

// 전체를 감싸는 컨테이너 박스에 들어가야 하는 공통 css
export const AllWrappCss = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// main contents에 들어가야 하는 공통 css
export const MainWrappCss = css`
  width: 390px;
  flex-grow: 1;
  background-color: #fff; // 삭제될 수 있음.
`;

export default GlobalStyled;
