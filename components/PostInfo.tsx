import { FC, ReactNode } from 'react';
import Heading from './Heading';
import { postType} from "../types";

type postInfoProps = {
  post: postType
}

//type Heading = ReactNode;
const PostInfo: FC<postInfoProps> = ({post}) => {
  const {title, body} = post;
  return (
    <>
      <Heading tag={'h3'} text={title}/>
      <p>{body}</p>
    </>
  );
}
export default PostInfo;
