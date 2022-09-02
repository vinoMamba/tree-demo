import { FC, useState } from 'react';
import './card.css';
import { CardItem } from './mock';

type Props = {
  id: number;
  title: string;
  children: CardItem[];
}


const CreateConnectLine = () => {
  return (
    <svg className="connect-line" height="20">
      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" strokeWidth="2" />
    </svg>
  )
}


export const Card: FC<Props> = (props) => {
  const [showChildren, setShowChildren] = useState(false);
  const toggle = () => {
    setShowChildren(!showChildren);
  }
  return (
    <>
      <div className="card-wrapper">
        <div className='card'>
          <CreateConnectLine />
          <div className='card-content'>
            {props.title}
            <button onClick={() => toggle()}>+</button>
          </div>
        </div>
        {(showChildren && props.children.length > 0) ?
          <>
            <div className="children">
              {props.children && props.children.map(item => {
                return <Card key={item.id} id={item.id} title={item.title} children={item.children} />
              })}
            </div>
          </> : null
        }
      </div>
    </>
  )
}
