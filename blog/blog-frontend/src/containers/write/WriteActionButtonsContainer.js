import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
    shallowEqual,
  );

  // 포스트 등록
  const onPublish = () => {
      if(originalPostId) {
          dispatch( updatePost( { title, body, tags, id : originalPostId}));
          console.log('여기 찍히니?')
          return ;
      }
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    console.log('이까진 흐르나?');
    console.log('post 값이 찍히나? ', post);
    console.log('postError 값이 찍히나? ', postError);
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log('실패사유 ', postError);
    }
  }, [navigate, post, postError]);

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit = {!!originalPostId}
    ></WriteActionButtons>
  );
};

export default WriteActionButtonsContainer;
