import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SingleProductcart from "./SingleProductcart";
const Products = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setdata(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <SimpleGrid columns={[2, 3, 4]}>
      {data.map((e) => (
        <Box key={e.id}>
          <SingleProductcart data={e} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Products;
