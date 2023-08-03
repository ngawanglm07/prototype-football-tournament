import { useState } from 'react';
import Data from './data'


function App() {
  Data.sort((a, b) => b.points - a.points);
  const [dataArray, setDataArray] = useState(Data);

  const updatePoints = (id, newPoints) => {
    setDataArray((prevData) =>
      prevData.map((record) => {
        if (record.id === id) {
          return { ...record, points: newPoints };
        }
        return record;
      })
    );
  };


  return (
    <div className="App">
      <div className='box'>
    {
      
      dataArray.map( record => {
       return(
        <div key={record.id}>
         <h1>{record.name}</h1>
         <h4>{record.points}</h4>
         <button onClick={() => updatePoints(record.id, record.points + 1)}>Increase Points</button>
            <button onClick={() => updatePoints(record.id, record.points - 1)}>Decrease Points</button>
        </div>
       )
      })
    }
      </div>
    </div>
  );
}

export default App;
