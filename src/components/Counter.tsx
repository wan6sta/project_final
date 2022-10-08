import {useState} from 'react';
import classes from './Counter.module.scss'

export function Counter() {
  const [value, setValue] = useState(0)

  return <div>
    <button
      className={classes.button}
      onClick={() => setValue(prev => prev + 1)}
    >
      Inc
    </button>
    {value}
  </div>
}