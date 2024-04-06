import { InputText } from 'primereact/inputtext';
import classes from './income-form.module.css';
import { Slider } from 'primereact/slider';
import { useState } from 'react';
export default function IncomeForm({
  onFormSubmitHandler,
  taxBrackets,
  error,
  isValidating,
  mutate,
}) {

  //track income slider
  const [sliderValue, setSliderValue] = useState(100000)

  //calculate taxes
  function handleFormSubmit(evt) {
    evt.preventDefault();
    onFormSubmitHandler(sliderValue);
  }

  //data is still loading
  if(
    taxBrackets?.length === 0 &&
    isValidating
  ) {
    return <p>loading...</p>
  }

  //error or no rates available
  if(
    error ||
    !isValidating &&
    taxBrackets.length === 0
  ) {
    return <p className='center'><button type='button' onClick={()=>mutate()}>refresh</button></p>
  }

  return <form onSubmit={handleFormSubmit} className={classes.form}>
    
    <div className={classes.controls}>
      <h4>Set your income for this year below then press the green button for your results.</h4>
      <div className={classes.control}>
        <Slider
          id='income'
          value={sliderValue}
          onChange={gg=>setSliderValue(gg.value)}
          max={1000000}
          min={1}
        />
      </div>
    </div>
    <button>${sliderValue ?? 0}.00</button>
  </form>;
}