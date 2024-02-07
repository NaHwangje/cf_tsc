/**
 * Pick Type
 */
interface Post {
    title: string;
    content: string;
    createdAt: Date;
  }
  
  function createPost(post: Omit<Post, 'createdAt'>) {
    return { ...post, createdAt: new Date() };
  }
  
  createPost({
    title: "요즘 개발자 취업 어떤가요?",
    content: '나이 30넘어서도 해볼만 한가요?'
  });
  