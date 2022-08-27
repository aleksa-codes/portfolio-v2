import fs from 'fs';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'src/posts');

// postsFilePaths is the list of all mdx files insite the POSTS_PATH directory
export const postsFilePaths = fs
  .readdirSync(POSTS_PATH)
  // only include .mdx files
  .filter((path) => /\.mdx$/.test(path));
