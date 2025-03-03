import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios' ; 


const NewsListBlock = styled.div`
 box-sizing : border-box ; 
 padding-bottom : 3rem ; 
 width : 768px ; 
 margin : 0 auto ;
 margin-top : 2rem ; 
 @media screen and (max-width : 768px) {
  width : 100% ; 
  padding-left : 1rem ; 
  padding-right : 1rem ; 
  }
` ; 


const NewsList = () => {
    const [articles, setArticles] = useState(null) ; 
    const [loading, setLoading] = useState(false) ; 
useEffect( () => {
    const fetchData = async () => {
        setLoading(true) ; 
        try {
            const response = await axios.get(
                // All articles about Tesla from the last month, sorted by recent first
                 `https://newsapi.org/v2/everything?q=tesla&from=2025-02-03&sortBy=publishedAt&apiKey=937ec5a8aaa24aba94d4ef488637c221`,
            ) ; 
            setArticles(response.data.articles) ; 
        } catch (e) {
            console.log(e) ; 
        }
        setLoading(false)
    } ; 
    fetchData() ; 
}, []) ;


 // 대기 중일 때 
 if(loading) {
    return <NewsListBlock> 대기 중 .... </NewsListBlock> ;
 }
 // 아직 article 값이 설정되지 않았을 때 
 if(!articles) {
    return null ; 
 }
 // article 값이 유효할 때 
    return (
        <div>
            <NewsListBlock>
                {articles.map(article => (
                    <NewsItem key={article.url} article={article} />
                ))} 
            </NewsListBlock>
        </div>
    );
};

export default NewsList;