import Title from "./Title";

function Header(props) {
  return <Title className={props.className} title={props.title}></Title>;
}
export default Header;
