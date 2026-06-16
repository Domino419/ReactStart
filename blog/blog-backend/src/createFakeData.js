import Post from './models/post.js';

export default function createFakeData() {
  console.log('더미데이터 생성기 시작! ');
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: `#${i}번째! 무궁화 꽃이 피었습니다.`,
    tags: ['dummy', 'data'],
  }));

  /* insertMany는 콜백 지원 불가. mongoose 7 버전 이상에서는 不
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
  */
  Post.insertMany(posts)
    .then((docs) => {
      console.log(docs);
    })
    .catch((err) => {
      console.error(err);
    });
}
