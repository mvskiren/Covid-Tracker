import React,{Component} from 'react';
import classes from './App.module.css';
import {Cards,Charts,CountryPicker} from './components';
import {fetchData} from './api';
import Stripee from './components/Stripe/Stripe';
import { flexbox } from '@material-ui/system';

class App extends Component {

  state={
    data:{},
    country:'',
  };



  async componentDidMount()
  {
    const data = await fetchData();

    this.setState({ data });

  }
  handleCountry=async (country) => {
    const fetchedData=await fetchData(country);
    this.setState({data: fetchedData,country: country});
    console.log(fetchedData);
    console.log(country);
  }


  render(){
    const { data,country}=this.state;
            return (
              <div>
              <h1 style={{}}>Covid Tracker</h1>
              <div className={classes.container}>
              <Cards  data={data}/> 
              <CountryPicker handleCountry={this.handleCountry} />    
              <Charts data={data} country={country}/>     
              <Stripee />    
                 
              </div>
              </div>
            );
}
}

export default App;
