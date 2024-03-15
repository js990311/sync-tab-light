export default function TabLi(props){
  return (
    <li className='tabLi'>
      <div>
        <a href={props.tab.url}>
          {props.tab.title}({props.tab.url})
        </a>
      </div>
    </li>
  )
}