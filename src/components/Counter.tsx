import {useState} from 'react';
import './Counter.scss'

export function Counter() {
  const [value, setValue] = useState(0)

  return <div>
    <button
      onClick={() => setValue(prev => prev + 1)}
    >
      Inc
    </button>
    {value}
  </div>
}