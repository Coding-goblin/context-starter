import {useContext} from 'react';
import {SettingsContext} from '../context/SettingsContext';

export function Second() {

  const {language, setLanguage, theme, count, setCount} = useContext(SettingsContext);

  return (
    <div style={{border: '5px solid dodgerblue', padding: 20, marginBlock: 10, flex: 1}}>
      <h2>Second</h2>

      <p><strong>Language:</strong> {language}</p>
      <p><strong>Theme:</strong> {theme}</p>
      <p><strong>Count:</strong> {count}</p>

      <button onClick={() => {setCount(prev => prev + 1)}}>+</button>

      <button onClick={() => {setLanguage('cz')}}>Česky</button>
      <button onClick={() => {setLanguage('en')}}>English</button>
      
    </div>
  );
}