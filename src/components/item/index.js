import './style.css'

export default function Item({data, deleteTraining, }) {
  return (
    <li className="item">
      <div className="item__wrap">
        <p>{data.date}</p>
        <p>{data.distance}</p>
        <div className="item__button-block">
          <button onClick={() => console.log(data.id)}>🥖</button>
          <button onClick={() => deleteTraining(data.id)}>❌</button>
        </div>
      </div>
    </li>
  )
}