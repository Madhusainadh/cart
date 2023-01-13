import React from "react";
import { Box, Image, Titl, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
const SingleProductcart = ({ data }) => {
  const { cartdata } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <Box>
      <Image w={"200px"} src={data.image} />
      <p>{data.title}</p>
      <p>{data.price}</p>
      <Button
        onClick={() =>
          dispatch({
            type: "ADD_DATA",
            payload: [...cartdata, { ...data, qty: 1 }],
          })
        }
      >
        Add to cart
      </Button>
    </Box>
  );
};

export default SingleProductcart;
