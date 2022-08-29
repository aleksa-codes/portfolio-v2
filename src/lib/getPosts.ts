import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const getPost = () => {
  const files = fs.readdirSync(path.join('src', 'posts'));
  const allPostsData = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const fileContents = fs.readFileSync(
      path.join('src', 'posts', `${slug}.mdx`),
      'utf8'
    );
    const { data } = matter(fileContents);
    return {
      ...data,
      slug
    };
  });
  return allPostsData;
};

export default getPost;
