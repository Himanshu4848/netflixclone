import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

import { BiPlay } from "react-icons/bi"; // BiPlay is from the Boxicons library
import { AiOutlinePlus } from "react-icons/ai"; // AiOutlinePlus is from the Ant Design library


const apikey = "46d098f07e909e882b35e718a6c5b8cd";
const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=46d098f07e909e882b35e718a6c5b8cd";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => {
  return <img className="card" src={img} alt="" />;
};

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => {
          return <Card key={index} img={`${imgUrl}/${item.poster_path}`} />;
        })}
      </div>
    </div>
  );
};

const Home = () => {
  const [hehe, sethehe] = useState([]);
  const [now, setnow] = useState([]);
  const [up, setup] = useState([]);
  const [top, settop] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const { data } = await axios.get(url);
      sethehe(data.results);
      console.log(hehe); // To check the data fetched
    };
    fetchPopular();
  }, []); // Empty array to ensure this runs only once

  useEffect(() => {
    const fetchnow = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=46d098f07e909e882b35e718a6c5b8cd&page=2"
      );
      setnow(data.results);
    };
    fetchnow();
  }, []);

  useEffect(() => {
    const fetchupcoming = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=46d098f07e909e882b35e718a6c5b8cd"
      );
      setup(data.results);
    };
    fetchupcoming();
  }, []); // Empty array to ensure this runs only once

  useEffect(() => {
    const fetchtop = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=46d098f07e909e882b35e718a6c5b8cd"
      );
      settop(data.results);
    };
    fetchtop();
  }, []); // Empty array to ensure this runs only once

  return (
    <>
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: top[0]
              ? `url(${imgUrl}/${top[3].poster_path})`
              : "rgb(16,16,16)",
          }}
        >
         {top[3] && <h1>{top[3].original_title}</h1>}
         {top[3] && <p>{top[3].overview}</p>}
        
         <div>
         <button>play <BiPlay/></button>
         <button>My list <AiOutlinePlus/></button>
         </div>
        
        </div>

        <Row title={"Popular on Netflix"} arr={hehe} />
        <Row title={"Now Playing"} arr={now} />
        <Row title="Upcoming Movies" arr={up} />
        <Row title="Top Rated" arr={top} />
      </section>
    </>
  );
};

export default Home;
