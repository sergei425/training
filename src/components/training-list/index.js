import Item from "../item";
import './style.css'

export default function TrainingList({training, deleteTraining, }) {
  
  return (
    <ul className="training-list">
      {training?.map(el => <Item key={el.id} data={el} deleteTraining={deleteTraining}/>)}
    </ul>
  )
}