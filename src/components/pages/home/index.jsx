import React, { useCallback, useState } from "react";
import { MainLayout } from "../../layouts/mainLayout";

export const Home = () => {
  const [showDetail, setShowDetail] = useState(false);
  
  const handleClick = useCallback(()=> {
    setShowDetail((prev) => !prev)
  }, [showDetail])
  return (
    <>
      <div id="home information">prueba tecnica Jhon Franco</div>
      <button data-testid="switch_button" onClick={handleClick}>
        {showDetail ? "Mostrar detalles" : "Ocultar detalles"}
      </button>
    </>
    /*     <MainLayout> */
    /*  </MainLayout> */
  );
};
