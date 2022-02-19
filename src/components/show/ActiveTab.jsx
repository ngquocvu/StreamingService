import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import CardList from "../CardList";
import noImg from "../../assets/no-img.png";

const ActiveTab = ({ id, activeTab, castData, imageData, seasonData }) => {
  console.log(activeTab);
  switch (activeTab) {
    case "Cast":
      return (
        <CardList
          description="Cast"
          data={castData.data}
          limit={10}
          loading={castData.loading}
          type="cast"
        />
      );
    case "Gallery":
      return <Gallery imageData={imageData.data} />;
    case "Season":
      return <Season seasonData={seasonData.data} />;
    default:
      return null;
  }
};

const Gallery = ({ imageData }) => {
  return (
    imageData && (
      <div className="container px-5 py-2">
        <div className="flex flex-wrap -m-1 md:-m-2">
          {imageData.map((each) => (
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={each.resolutions.original.url}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

const Season = ({ seasonData }) => {
  return (
    seasonData && (
      <div className="w-full">
        {seasonData.map((each) => (
          <div className="flex gap-4 py-4 border-b-2 border-gray-700 ">
            <img
              alt="gallery"
              className="block object-cover object-center w-1/6 rounded-lg"
              src={each.image?.medium ? each.image.medium : noImg}
            />
            <div className="flex flex-col align-center">
              <div className="font-semibold text-2xl">Season {each.number}</div>
              <div>{each.network?.name}</div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};
export default ActiveTab;
