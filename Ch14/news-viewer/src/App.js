import { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';



const App = () => {

  const [ category , setCategory] = useState('tesla')  // all 대신에 tesla 
  const onSelect = useCallback(category => setCategory(category), []) ; 
   
  return (
    <div>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </div>
  );
};

export default App;

