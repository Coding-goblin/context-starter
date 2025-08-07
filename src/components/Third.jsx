import {useContext} from 'react';
import {SettingsContext} from '../context/SettingsContext';

export function Third() {


  const {language, theme, count, setCount} = useContext(SettingsContext);
  
  return (
    <div style={{border: '5px solid seagreen', padding: 20, marginBlock: 10, flex: 1}}>
      <h2>Third</h2>

      <p><strong>Language:</strong> {language}</p>
      <p><strong>Theme:</strong> {theme}</p>
      <p><strong>Count:</strong> {count}</p>

      <button onClick={() => {setCount(prev => prev + 1)}}>+</button>

    </div>
  );
}