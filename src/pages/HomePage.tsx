import React, { useEffect } from "react";
import Header from "../component/Header";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

const HomePage = () => {

  const { data , error , isLoading , isValidating} = useSWR("/api/articles",fetcher);
   useEffect(( )=> {
    console.log(error);
    console.log(isLoading);
    console.log(isValidating);
    console.log(data);
    
   })

  return (
    <React.Fragment>
      <Header>
        <title>Home-Reactgraphql</title>
        <meta name="description" content="Learn about graphql with reactjs " />
      </Header>
      <div className="container">


        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          dicta consectetur laboriosam suscipit atque error natus soluta a,
          pariatur cupiditate necessitatibus itaque quaerat, numquam eveniet
          ipsum in consequatur distinctio molestiae?
        </p>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
