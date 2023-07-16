export default function ListItem(props) {
  const { name, duration, handleClick } = props;

  return (
    <li className="drinks__item" onClick={() => handleClick(name, duration)}>{name}, {duration}</li>  
  )
}