import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const getPost = (slug: string) => {
  const fileContents = fs.readFileSync(
    path.join('src', 'posts', `${slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(fileContents);
  return {
    ...data,
    content,
    slug
  };
};

export default getPost;
