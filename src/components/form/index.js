import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import { useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./style.css";

export default function Form({ onChangeTrainingData}) {
  const dataRef = useRef(null)

  useEffect(() => {
    flatpickr('#date', {
      enableTime: true,
      dateFormat: "d.m.Y",
      time_24hr: true,
    });
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = Array.from(new FormData(evt.target).entries()).reduce((acc, [key, value]) => {
      acc[key] = value
      acc['id'] = uuidv4()
      return acc
    }, {});
    
    onChangeTrainingData(data)
    evt.target.reset()
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="form__wrap">
        <p>
          <label>
            Дата (ДД.ММ.ГГ)
            <input type="text" ref={dataRef} id="date" name="date"  required />
          </label>
        </p>
        <p>
          <label>
            Пройдено км
            <input type="text" name="distance" required />
          </label>
        </p>
        <button type="submit" className="form__btn">
          ok
        </button>
      </div>
    </form>
  );
}
