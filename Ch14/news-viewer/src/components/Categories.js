import styled from 'styled-components';

const categories = [
  {
    name: `tesla`,
    text: `테슬라`,
    // https://newsapi.org/v2/everything?q=tesla&from=2025-02-04&sortBy=publishedAt&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
  {
    name: `apple`,
    text: `애플`,
    // https://newsapi.org/v2/everything?q=apple&from=2025-02-04&sortBy=publishedAt&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
  {
    name: `samsung`,
    text: `삼성`,
    //  https://newsapi.org/v2/everything?q=samsung&from=2025-02-04&sortBy=publishedAt&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
  {
    name: `xiaomi`,
    text: `샤오미`,
    // https://newsapi.org/v2/everything?q=xiaomi&from=2025-02-04&sortBy=publishedAt&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
  {
    name: `hyundai`,
    text: `현대`,
    //  https://newsapi.org/v2/everything?q=hyundai.&from=2025-02-04&sortBy=publishedAt&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
  {
    name: `LG`,
    text: `엘지`,
    //  https://newsapi.org/v2/everything?q=LG&from=2025-02-04&sortBy=publishedAt&apiKey=937ec5a8aaa24aba94d4ef488637c221
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

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
    return (
        <div>
            <CategoriesBlock>
                {categories.map( c=> (
                    <Category key = {c.name}>{c.text}</Category>
                ))}
            </CategoriesBlock>
        </div>
    )
}

export default Categories;
