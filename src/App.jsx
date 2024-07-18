"use client";
import React, { useState } from 'react';
import casualImage from './assets/casual.jpg'; // Importa la imagen local directamente
import Confetti from 'react-dom-confetti';
import sexi from './assets/sexi.jpg'
import video from './assets/video.mp4'

function App() {
  const [istext, setIsText] = useState(false);
  const [frases, setFrases] = useState('¿Te gustaria hablar con migo 🥹?');
  const [count, setCount] = useState(80);
  const [imagen, setImagen] = useState(casualImage); // Usa la imagen importada
  const [countNo, setCountNo] = useState(80);
  const [confettiActive, setConfettiActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);



  const handleClickNO = () => {
    const fracesRandom = [
      '¡venn, no seas asi 😭!',
      '¡Atrevidaaa 😡!',
      '¡Ya no me amas ❤️‍🩹!',
      '¡En verdad lo suento amorrrr 😇!'
    ];

    const imgRandom = [
      'https://pbs.twimg.com/media/EWZgh3kWoAAZuSt.jpg',
      'https://i.pinimg.com/originals/63/7a/bd/637abda6317d41904a6189965644c46b.jpg',
      'https://pbs.twimg.com/media/EC9Ory8WwAAAcM6.jpg',
      'https://i.pinimg.com/736x/59/4a/27/594a27820a0c486b1c9415a3c7456532.jpg'
    ];

    const randomImg = imgRandom[Math.floor(Math.random() * imgRandom.length)];
    setImagen(randomImg);

    const randomFrase = fracesRandom[Math.floor(Math.random() * fracesRandom.length)];
    setFrases(randomFrase);

    setCount((prevCount) => {
      const valorWi = prevCount + 10;
      return valorWi;
    });

    setCountNo((prevCount) => {
      const valorWi = prevCount - 10;
      return valorWi;
    });

    setIsText(false)
  };

  const handleClicksSI = ()=>{
    setConfettiActive(true); // Activa el confeti
    setTimeout(() => setConfettiActive(false), 5000); // Desactiva el confeti después de 3 segundos
    const fraseNew = '¡gracias mi amorrr lindo 😍!'

    setFrases(fraseNew);
    setImagen(sexi)
    setIsText(true)
  };

  const handleVideo = ()=>{
    setOpenModal(!openModal)
  }

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "300px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  }



  return (
    <>
      <section className='flex flex-col gap-2 justify-center items-center place-items-center w-[100%] h-auto mb-2 mt-10'>
        <h3>{frases}</h3>
        <div className='flex flex-row justify-center items-center gap-2'>
          <button
            className='bg-green-500 p-1 rounded-md p-auto m-auto'
            style={{ width: `${count}px` }}
            onClick={handleClicksSI}
          >
            SI 💘
            <Confetti active={confettiActive} config={confettiConfig} />
          </button>
          <button
            className='bg-red-500 p-1 rounded-md p-auto'
            style={{ width: `${countNo}px` }}
            onClick={handleClickNO}
          >
            NO
          </button>
        </div>

        <div className='w-[100%] h-auto flex flex-row justify-center items-center'>
          <img src={imagen} alt="Casual" className="w-[95%] h-[400px] object-cover rounded-xl" />
        </div>

        {istext && (
          <div>
          <p className='font-semibold text-2xl text-center mb-2'>ESCUCHAME AMOR ❣️</p>
          <p className='w-[35vh] h-auto flex flex-row justify-center items-center'>
          Hola flaca. no te quiero molestar solo quiero que te sientas bien. en verdad no se que me pasa, quisiera estar solo pero me siento super raro estando paliados con Tigo por unas cosas que no tienen sentido, por fa hablemos sin compromisito, al menos para sentirme un poco mejor porfa ❤️‍🩹
          </p>

          <div className='flex flex-row gap-2 justify-center items-center mt-4  '>
         {openModal && (
           <video className="h-full w-full rounded-lg" controls autoPlay>
                <source
                  src={video}
                  type="video/mp4"
                  width={"35vh"}
                  height={"40vh"}
                />
                Your browser does not support the video tag.
              </video>
       
         )}

        </div>

          <div className='flex flex-row gap-2 justify-center items-center mt-4  '>
          <button 
           onClick={handleVideo}
          className='bg-green-500 p-1 rounded-md'>Ver video 💘</button>
          <a href='https://www.youtube.com/watch?v=IBNomMjzwoU' target='_blank' className='bg-red-500 p-1 rounded-md text-write'>Escuchar audio 👿</a>
          </div>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
