import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span,
h1, h2, h3, h4, h5, h6, p,
a, img, ol, ul, li,
fieldset, form, label, legend, aside, 
figure, figcaption, footer, header, nav, section{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 16px;
	vertical-align: baseline;
    box-sizing: border-box;
    list-style: none;
    
}

:root {
	--color-color-primary: #fd377e;
	--color-color-primary-2: #e34981;
	--color-color-secondary: #03b898;
	--color-grey-5: #868E96;
	--color-grey-4: #212529;
	--color-grey-3: #343a40;
	--color-grey-2: #e9ecef;
	--color-grey-1: #f8f9fa;
}


body{
    background-color: white;
	font-family: "Nunito";
}

#root{
    height: 100%;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: white;
}

main{
	display: flex;
	flex-direction: row;
    flex-wrap: wrap;
	height: 100%;
	width: 100%;
	max-width: 1200px;
	box-sizing: border-box;
	justify-content: space-between;
}

option{
	font-family: "Inter", sans-serif;
}
`;
export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
`;
