import React, { Component } from 'react';
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBOx/SearchBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      searchField:''
    }
  }
  inputChange = (event) => {
    
    this.setState({ searchField: event.target.value });
  }

  componentDidMount() {
    return (
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(cats => this.setState({ cats: cats }))
      
    )
  }
  
  render() {
    const { cats, searchField } = this.state;
    const filterCats = cats.filter(cat => 
        cat.title.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    
    return (
      <div className='App'>
        <h1 className='Heading'>Crazy Cats</h1>
        <SearchBox inputChange={()=>this.inputChange}/>
        <CardList cats={filterCats} onSearch={searchField}/>
      </div>
    );
  }
}

export default App;