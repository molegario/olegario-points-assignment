import InputSlider from 'react-input-slider';
import classes from './income-form.module.css';
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
    // true || //for loading degugging
    taxBrackets?.length === 0 &&
    isValidating
  ) {
    return <p className={classes.loadingmsg}>loading rates...</p>
  }

  //error or no rates available
  if(
    // true || //for fail/recovery debug
    error ||
    !isValidating &&
    taxBrackets.length === 0
  ) {
    return <div className={classes.recovery}>
      <button type='button' onClick={()=>mutate()}>refresh</button>
      <div className={classes.note}>Temporarily unable to retrieve the rates for this year.  Press refresh to try again.</div>
    </div>
  }

  return <form onSubmit={handleFormSubmit} className={classes.form}>
    <div className={classes.controls}>
      <h4>Set your income for this year below and then press the green button for your results.</h4>
      <div className={classes.control}>
        <input 
          type='number'
          value={sliderValue}
          min={1}
          max={1000000}
          step={0.01}
          onChange={
            evt=>{
              setSliderValue(evt.target.value);
            }
          }
        />
        <InputSlider 
          axis='x'
          x={sliderValue}
          onChange={({x:xxx})=>{
            return setSliderValue(xxx);
          }}
          xmin={1}
          xmax={1000000}
          xstep={1}
        />
      </div>
    </div>
    <button>${(+sliderValue ?? 0).toFixed(2)}</button>
  </form>;
}