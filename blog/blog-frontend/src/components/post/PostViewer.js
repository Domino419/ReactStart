import styled from 'styled-components';
import palette from '../../lib/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import {Helmet} from "react-helmet-async";

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;
//
// const SubInfo = styled.div`
//   margin-top: 1rem;
//   color: ${palette.gray[6]};
//   /* span 사이 가운뎃점 문자 보여주기 */
//
//   span + span:before {
//     color: ${palette.gray[5]};
//     padding-left: 0.25rem;
//     padding-right: 0.25rem;
//     content: '\\B7'; // 가운뎃점 문자
//   }
// `;
//
// const Tags = styled.div`
//   margin-top: 0.5rem;
//
//   .tag {
//     display: inline-block;
//     color: ${palette.cyan[7]};
//     text-decoration: none;
//     margin-right: 0.5rem;
//
//     &:hover {
//       color: ${palette.cyan[6]};
//     }
//   }
// `;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  // 1. 에러 발생 시 처리
  if (error) {
    const is400 = error.response && error.response.status === 400;
    return (
        <PostViewerBlock>
          <Helmet>
            <title>에러 발생</title>
          </Helmet>
          {is400 ? '존재하지 않는 포스트입니다.' : '오류 발생 !'}
        </PostViewerBlock>
    );
  }

  // 2. 로딩 중이거나 포스트 데이터가 아직 없을 때 (null 대신 Helmet 포함해서 리턴)
  if (loading || !post) {
    return (
        <PostViewerBlock>
          <Helmet>
            <title>포스트 읽는 중...</title>
          </Helmet>
          {/* 원하신다면 여기에 로딩 스피너 등을 넣으셔도 됩니다 */}
        </PostViewerBlock>
    );
  }

  // 3. 데이터가 성공적으로 로드되었을 때
  const { title, body, user, publishedDate, tags } = post;

  return (
      <PostViewerBlock>
        <Helmet>
          {/* 공백이나 언디파인드 방지를 위해 문자열 템플릿 사용 */}
          <title>{`${title} - 블로그`}</title>
        </Helmet>
        <PostHead>
          <h1>{title}</h1>
          <SubInfo
              username={user?.username}
              publishedDate={publishedDate}
              hasMarginTop
          />
          <Tags tags={tags}></Tags>
        </PostHead>
        {actionButtons}
        <PostContent dangerouslySetInnerHTML={{ __html: body }} />
      </PostViewerBlock>
  );
};
export default PostViewer;
