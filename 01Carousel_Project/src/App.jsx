import React from "react";

export default function App() {
  const Data = [
    {
      img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Peshique",
      review:
        "A cat, scientifically known as Felis catus, is a small, domesticated carnivorous mammal that is often kept as a companion animal or pet.",
    },
    {
      img: "https://images.pexels.com/photos/7572347/pexels-photo-7572347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Peshique",
      review:
        "A cat, scientifically known as Felis catus, is a small, domesticated carnivorous mammal that is often kept as a companion animal or pet.",
    },
    {
      img: "https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Peshique",
      review:
        "A cat, scientifically known as Felis catus, is a small, domesticated carnivorous mammal that is often kept as a companion animal or pet.",
    },
    {
      img: "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Peshique",
      review:
        "A cat, scientifically known as Felis catus, is a small, domesticated carnivorous mammal that is often kept as a companion animal or pet.",
    },
    {
      img: "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Peshique",
      review:
        "A cat, scientifically known as Felis catus, is a small, domesticated carnivorous mammal that is often kept as a companion animal or pet.",
    },
  ];

  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          {Data.map((e) => (
            <div className="bg-white h-[450px] text-black rounded-xl" >
              <div className="h-56 bg-blue-700 rounded-t-xl flex justify-center items-center ">
                <img src={e.img} alt="" className="w-44 h-44 rounded-full" />
              </div>
              <div className="flex flex-col justify-center items-center mt-3">
                <p className="font-semibold text-3xl m-2">{e.Name}</p>
                <p className="m-2">{e.review}</p>
                <button className="bg-blue-700 rounded-2xl text-white  p-3 m-5">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
