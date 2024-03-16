export default function TabLi(props){
  return (
    <li className='tabLi'>
      <button onClick={()=>{props.deleteHandler(props.tab.id)}}>
        삭제
      </button>
      <div>
        <a href={props.tab.url}>
          {props.tab.title}({props.tab.url})
        </a>
      </div>
    </li>
  )
}