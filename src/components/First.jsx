import {useContext} from 'react';
import {SettingsContext} from '../context/SettingsContext';

import {Third} from '../components/Third'

export function First() {

  const {language, theme, setTheme, count} = useContext(SettingsContext);

  return (
    <div style={{border: '5px solid red', padding: 20, marginBlock: 10, flex: 1}}>
      <h2>First</h2>

      <p><strong>Language:</strong> {language}</p>
      <p><strong>Theme: {theme}</strong> </p>
      <p><strong>Count:</strong> {count}</p>

      <button onClick={() => {setTheme('light')}}>Light theme</button>
      <button onClick={() => {setTheme('dark')}}>Dark theme</button>

      <Third />
    </div>
  );
}