const welcome = {
greeting: 'Hi',
title: 'React'
};

const list = [
  {
    id: 0,
    title: 'React',
    url: '',
    author: '',
    num_comments: 3,
    points: 4
  },
  {
    id: 0,
    title: 'React1',
    url: '',
    author: '',
    num_comments: 3,
    points: 5,
  }
 ]
function App() {
return(
<div>
  <h1>{welcome.greeting} {welcome.title}</h1>
  <label htmlFor="search">search</label>
  <input type="text" id= "search"/>
  <ul>
    {
      list.map(function(item){
      return <li key={item.id}>
        <span>
          <a href={item.url }>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        </li>
      })
    }
  </ul>
</div>
);
}

export default App
 