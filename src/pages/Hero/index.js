import React,{useEffect, useState} from 'react';
import Article from '../../components/Article';
import { Container } from '@material-ui/core';
import data from '../../data.json';
import Header from '../../components/Header';
import ActionButton from '../../components/ActionButton';


const Hero = () => {

  const [order , setOrder] = useState("asc");
  const [articles , setArticles] = useState([]);

  useEffect(() => {

      let sortedData = [...data];
      
      if(order === 'asc'){
          sortedData.sort((a,b) => a.upvotes - b.upvotes);
          setArticles(sortedData);
      }

      else if(order === 'desc'){
          sortedData.sort((a,b) => b.upvotes - a.upvotes);
          setArticles(sortedData);
      }
      else{
          sortedData.sort((a,b) => b.date - a.date);
          setArticles(sortedData);
      }
  

  }, [order]);


  const hitOrderChange = async (orderName) => {

    if(orderName !== order){
      setOrder(orderName);
    }

  }

  return (

    <Container maxWidth="lg">

          <Header />
        
          <ActionButton  
            hitOrderChange={hitOrderChange}
          />

          {
            articles.map( (data) => {
                return(
                  <div key={data.id}>
                    <Article data={data} />
                  </div>
                )
            })
          }

    </Container>
    
  );
}

export default Hero;