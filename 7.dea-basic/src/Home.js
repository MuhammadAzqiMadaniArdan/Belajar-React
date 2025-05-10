import React, { useState, useEffect, useRef } from "react";
import Profile from "./components/Ccomp";
import Description from "./components/Fcomp";

function Home() {
  const [waifu, SetWaifu] = useState(1);
  const [waifuName, SetWaifuName] = useState("");

  useEffect(() => {
    if (waifu > 10) {
      SetWaifuName("Astolfo");
    } else {
      SetWaifuName("CIHUUUUUUY");
    }
  }, [waifu]);

  const goto = (ref) => {
    window.scrollTo({
        top: ref.offsetTop,
        left:0,
        behavior:"smooth"
    })
  }
  const linkRef = useRef(null);
  return (
    <>
      <h5>Waifu Saya : {waifuName}</h5>
      <div
        style={{ display: "flex", alignItems: "center", gap: 10, padding: 10 }}
      >
        <button
          type="button"
          onClick={() =>
            SetWaifu((prev) => (prev === 0 ? (prev = 0) : prev - 1))
          }
        >
          -
        </button>
        <h2>Aku Punya {waifu} Waifu</h2>
        <button type="button" onClick={() => SetWaifu((prev) => prev + 1)}>
          +
        </button>
      </div>
      <Profile />
      <Description name="Aril Tatum" />
      <div>
        <div onClick={() => goto(linkRef.current)}>
          <h1> Tekan Aku Bang 0v0 - useRef </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          illum distinctio esse dignissimos perspiciatis at! Ipsum error unde
          magni quidem quisquam, ea, vel sapiente voluptatum officiis aliquam
          mollitia. Ullam, impedit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          illum distinctio esse dignissimos perspiciatis at! Ipsum error unde
          magni quidem quisquam, ea, vel sapiente voluptatum officiis aliquam
          mollitia. Ullam, impedit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          illum distinctio esse dignissimos perspiciatis at! Ipsum error unde
          magni quidem quisquam, ea, vel sapiente voluptatum officiis aliquam
          mollitia. Ullam, impedit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          illum distinctio esse dignissimos perspiciatis at! Ipsum error unde
          magni quidem quisquam, ea, vel sapiente voluptatum officiis aliquam
          mollitia. Ullam, impedit.
        </p>
        <a ref={linkRef} style={{color: "red"}}>Learning Page</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          illum distinctio esse dignissimos perspiciatis at! Ipsum error unde
          magni quidem quisquam, ea, vel sapiente voluptatum officiis aliquam
          mollitia. Ullam, impedit.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          illum distinctio esse dignissimos perspiciatis at! Ipsum error unde
          magni quidem quisquam, ea, vel sapiente voluptatum officiis aliquam
          mollitia. Ullam, impedit.
        </p>
      </div>
    </>
  );
}

export default Home;
