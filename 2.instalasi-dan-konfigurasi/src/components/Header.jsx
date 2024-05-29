/* eslint-disable react/prop-types */
export default function Header({name}) {
    return(<>
    <h1 className="heading">Belajar React Bareng {name ? name : "WPU"} 🐱‍🏍</h1>
    <img src="" alt="My Image" width="80" />
    </>);
  
  }