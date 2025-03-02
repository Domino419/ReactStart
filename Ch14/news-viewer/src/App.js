import NewsList from './components/NewsList';



const App = () => {
  return (
    <div>
      <NewsList />
    </div>
  );
};

export default App;


/*
import {useState} from 'react';
import axios from 'axios' ; 


const App = () => {
  const [data, setData ] = useState(null) ; 
  const onClick = async () => {
    console.log('async !! ')
    try{
      console.log('try !! ')
      const Response = await axios.get(
        // `https://jsonplaceholder.typicode.com/todos/1`
        // `https://newsapi.org/v2/top-headlines?country=kr&apiKey=937ec5a8aaa24aba94d4ef488637c221`
        `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=937ec5a8aaa24aba94d4ef488637c221`
      ) ;
      setData(Response.data) ; 
    } catch (e) {
      console.log(e) ; 
    }
  } ; 

  return (
    <div>
      <button onClick={onClick}> 불러오기 </button>
    { data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/> }
    </div>
  );
};

export default App;
*/
