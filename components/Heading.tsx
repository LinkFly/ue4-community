import {FC} from "react";

type headingProps = {
  tag?: string,
  text: string,
  className?: string,
}

const Heading: FC<headingProps> = ({tag, text, className}) => {
  const Tag: any = tag || 'h1';
  return <Tag className={className}>{text}</Tag>;
}
export default Heading;
