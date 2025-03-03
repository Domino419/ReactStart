import styled from 'styled-components';
import NewsItem from './NewsItem';

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

const sampleArticle = {
    title : `제목`, 
    description : `내용 내용 내용 ~ `, 
    url : `https://google.com`, 
    urlToImage  : `https://fakeimg.pl/160/`  //https://via.placeholder.com/ 사이트는 접속불가 
}  ; 

const NewsList = () => {
    return (
        <div>
            <NewsListBlock>
                <NewsItem  article={sampleArticle}/>
                <NewsItem  article={sampleArticle}/>
                <NewsItem  article={sampleArticle}/>
                <NewsItem  article={sampleArticle}/>
                <NewsItem  article={sampleArticle}/>
                <NewsItem  article={sampleArticle}/>
            </NewsListBlock>
        </div>
    );
};

export default NewsList;