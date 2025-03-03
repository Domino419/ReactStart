import styled from 'styled-components';

const categories = [
  {
    name: `tesla`,
    text: `테슬라`,
    // https://newsapi.org/v2/everything?q=tesla&from=2025-02-03&sortBy=publishedAt&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
  {
    name: `apple`,
    text: `애플`,
    // https://newsapi.org/v2/everything?q=apple&from=2025-03-02&to=2025-03-02&sortBy=popularity&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
  {
    name: `business`,
    text: `비즈니스`,
    //  https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
  {
    name: `techcrunch`,
    text: `테크`,
    // https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
  {
    name: `wsj`,
    text: `저널`,
    //  https://newsapi.org/v2/everything?domains=wsj.com&apiKey=937ec5a8aaa24aba94d4ef488637c221
  },
];

const CategoriesBlock = styled.div`
display = fles , 
padding : 1rem ; 
width : 768px ; 
margin : 0 auto ; 
@media screen and (max-width : 768ps) {
width : 100% ; 
overflow-x : auto ; 
} ; 
`;

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
