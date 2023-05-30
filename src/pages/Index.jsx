import React from 'react'
import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";

const Index = () => {
  let data = [{
    name: "Shonen:",
    description:"Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.",
    character_photo: "../../src/assets/images/29eba99.png",
    cover_photo: "../../src/assets/images/image3.png",
  }];
      return (
        <>
          <div>
            <Welcome />
            <Carousel
              character_photo={data[0].character_photo}
              cover_photo={data[0].cover_photo}
              name={data[0].name}
              description={data[0].description}
            />
          </div>
        </>
  )
}

export default Index