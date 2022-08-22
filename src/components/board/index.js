import { useState } from "react";
import Form from "../form";
import TrainingList from "../training-list";
import './style.css'

export default function Board() {
  const [trainigData, setTrainingData] = useState(() => [])
  
  const onChangeTrainingData = (data) => {
    let indexData = trainigData.findIndex(el => el.date === data.date)
    if (indexData !== -1) {
      trainigData[indexData] = {...trainigData[indexData], distance: Number(trainigData[indexData].distance) + Number(data.distance)}
      setTrainingData(() => [...trainigData])
    } else {
      setTrainingData(() => [...trainigData, data])
    }
  }

  const deleteTraining = (id) => {
    const newTrainingData = trainigData.filter(el => el.id !== id)
    setTrainingData(() => newTrainingData)
  }

  return (
    <div className="board">
      <Form onChangeTrainingData={onChangeTrainingData}/>
      <div className="board__record">
        <div className="board__record-title">
          <span>Дата (ДД.ММ.ГГ)</span>
          <span>Пройдено км</span>
          <span>Действия</span>
        </div>
        {Boolean(trainigData.length) ? <TrainingList training={trainigData} deleteTraining={deleteTraining} /> : "Записей нет"}
      </div>
      
    </div>
  )
}