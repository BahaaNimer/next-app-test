import { posts } from '../../../posts';

export default function handler(req, res) {
  console.log(posts);
  res.status(200).json(posts);
}
