import React, { useEffect } from 'react';
import axios from 'axios';

function Home({ products }) {
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios.get(url)
  //   console.log(response.data)
  // }

  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url)
  // return resposnse data as an object
  return { products: response.data }
  // note: this object will be merged with existing props
}

export default Home;
