
// import styled from 'styled-components' ;
// import { css } from '../../node_modules/styled-components/dist/base';

import styled, { css } from 'styled-components'


const categories = [
  {
    name: `tesla`,
    text: `테슬라`,

  },
  {
    name: `apple`,
    text: `애플`,

  },
  {
    name: `samsung`,
    text: `삼성`,

  },
  {
    name: `xiaomi`,
    text: `샤오미`,

  },
  {
    name: `hyundai`,
    text: `현대`,

  },
  {
    name: `LG`,
    text: `엘지`,

  },
];

const CategoriesBlock = styled.div`
  display: flex; 
  padding: 1rem; 
  width: 768px; 
  margin: 0 auto; 
  @media screen and (max-width: 768px) {
    width: 100%; 
    overflow-x: auto; 
  }
`

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${props =>
    props.active && css`
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({onSelect, category }) => {
    return (
        <div>
            <CategoriesBlock>
                {categories.map( c=> (
                    <Category key = {c.name}
                    active={category === c.name}
                    onClick={()=> onSelect(c.name)}
                    >{c.text}
                    </Category>
                ))}
            </CategoriesBlock>
        </div>
    )
}

export default Categories;
