import "./App.css";
import {useState, useEffect} from 'react';
import CardList from "./components/card-list/cart-list.component";
import SearchBox from "./components/search-box/search-box.component";






const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters,searchField]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };



  return (
    <div className="App">
    <h1 className="app-title">Monster Rolodex</h1>

    <SearchBox
      className="monsters-search-box"
      placeholder="Search Monsters"
      onChangeHandler={onSearchChange}
    ></SearchBox>


    <CardList monsters={filteredMonsters}></CardList>
  </div>
  )
}
 

export default App;