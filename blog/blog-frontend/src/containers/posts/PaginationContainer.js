import React from 'react';
import Pagination from '../../components/posts/Pagination';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();

  const { username } = useParams();
  const tag = searchParams.get('tag');
  const page = parseInt(searchParams.get('page'), 10) || 1;

  const { lastPage, posts, loading } = useSelector(
    ({ posts, loading }) => ({
      lastPage: posts.lastPage,
      posts: posts.posts,
      loading: loading['posts/READ_POST'],
    }),
    shallowEqual,
  );

  // post data is null or loading 이면 아무것도 안 보여줌.
  if (!posts || loading) return null;

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}   // 화면에 보여줄 페이지 설정
      lastPage={lastPage}
    ></Pagination>
  );
};

export default PaginationContainer;
