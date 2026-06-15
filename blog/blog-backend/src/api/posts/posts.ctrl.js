// id 의 초기값 설정
let postId = 1;

// posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

/* 포스트 작성  :: POST /api/posts { title, body } */
exports.write = (ctx) => {
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있다.
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

/* 포스트 목록 조회 :: GET /api/posts */
exports.list = (ctx) => {
  ctx.body = posts;
};

/*특정 포스트 조회 :: GET / spi/posts/:id */
exports.read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다. ',
    };
    return;
  }
  ctx.body = post;
};

/* 특정 포스트 제거 :: DELETE /api/posts/:id */
exports.remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  // index 번째 아이템을 제거
  posts.splice(index, 1);
  ctx.status = 204;
};

/* 포스트 교체 (수정) ::: put /api/posts/:id ( title, body */
exports.replace = (ctx) => {
  // put 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교제할 때 사용
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }

  // 전체 객체를 덮어 씌우기.
  posts[index] = {
    //id,
    id: Number(id),
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

/* 포스트 수정(특정 필드만 변경) ::: PATCH /api/posts/:id  { title , body } */
exports.update = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }

  // 기존 값에 정보를 덮어씌우기
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
