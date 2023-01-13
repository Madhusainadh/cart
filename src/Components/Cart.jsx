import React, { useEffect, useState } from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Cart = () => {
  const [totalprice, settotalprice] = useState(0);
  const { cartdata } = useSelector((store) => store.cart);
  console.log(cartdata);
  useEffect(() => {
    let total = cartdata.reduce((a, b) => a + b.qty * b.price, 0);
    settotalprice(total);
  }, [cartdata]);
  return (
    <div>
      <h1> {totalprice}</h1>
      {cartdata.map((e) => (
        <Box>
          <Image w={"200px"} src={e.image} />
          <p>{e.price}</p>
          <Button>increace</Button>
          <Button>{e.qty}</Button>
          <Button>decrease</Button>
        </Box>
      ))}
    </div>
  );
};

export default Cart;
