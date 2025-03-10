import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box; 
  padding-bottom: 3rem; 
  width: 768px; 
  margin: 0 auto;
  margin-top: 2rem; 
  @media screen and (max-width: 768px) {
    width: 100%; 
    padding-left: 1rem; 
    padding-right: 1rem; 
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 수정: 'tesla'일 경우에도 'tesla'를 검색어로 사용
        const query = category === 'tesla' ? 'tesla' : category;
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${query}&from=2025-02-10&sortBy=publishedAt&apiKey=937ec5a8aaa24aba94d4ef488637c221`
        );
        console.log(response);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);  // category가 변경될 때마다 재실행

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중 ....</NewsListBlock>;
  }
  // 아직 articles가 설정되지 않았을 때
  if (!articles) {
    return null;
  }
  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article, index) => (
        <NewsItem key={`${article.url}-${index}`} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default  NewsList ; 