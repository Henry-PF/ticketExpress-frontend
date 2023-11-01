import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./ReviewForm.css";
import Rating from "react-rating";

export default function ReviewForm() {
    const [rating, setRating] = useState(0); // Estado para la calificación
    const [comment, setComment] = useState(""); // Estado para el comentario
    const [data, setData] = useState({
      id_user: 0, // Inicializa con un valor predeterminado o con el ID del usuario si está disponible
      puntos: 0,
      contenido: "",
    });
    //BUSCAR COMO FIGURA EN LOCALST
const userIdFromLocalStorage = localStorage.getItem('userId');

// Inicializa el estado con el ID del usuario o un valor predeterminado
const [userId, setUserId] = useState(userIdFromLocalStorage || 0);
    
    const handleRatingChange = (newRating) => {
      setRating(newRating);
      setData({ ...data, puntos: newRating });
    };
    
    const handleCommentChange = (e) => {
      const newComment = e.target.value;
      setComment(newComment);
      setData({ ...data, contenido: newComment });
    };
    
    const handleSubmit = () => {
        // Aquí puedes obtener el ID del usuario, ya sea desde el localStorage o de cualquier otra fuente
        const userId = localStorage.getItem('userId'); // Reemplaza con la forma en que obtienes el ID del usuario
      
        // Actualiza el ID del usuario en el objeto data antes de enviarlo al backend
        const updatedData = {
          ...data,
          id_user: userId,
        };
      
        // Luego, puedes enviar el objeto updatedData al backend a través de la solicitud POST
        fetch("/tu-endpoint-de-api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        })
          .then((response) => {
            if (response.ok) {
              // Manejar la respuesta exitosa, redireccionar o mostrar un mensaje al usuario
            } else {
              // Manejar errores en la respuesta
            }
          })
          .catch((error) => {
            // Manejar errores de red o de la petición
          });
      };
      
    

  return (
    console.log(data, 'DATA ENVIADA AL BACK')
,
    <>
      <div className="mx-auto gradient-custom" style={{ height: "400px" }}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div
              className="text-center"
              style={{ marginTop: "50px", marginLeft: "10px" }}
            >
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">
                Gracias por elegirnos
              </MDBTypography>
              <p className="white-text">Ayudanos a mejorar</p>
            </div>
            <div className="text-center">
              <MDBBtn
                color="white"
                rounded
                className="back-button"
                onClick={handleSubmit}
              >
                Enviar
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: "#495057" }}>
                    Dejanos tu opinion
                  </MDBTypography>
                </div>

                <form className="mb-0 d-flex flex-column align-items-center justify-content-center">
                  {/* ------------------RATING------------------ */}
                  <div className="mb-4">
                    <Rating stop={10} />
                  </div>

                  {/* ------------COMENTARIO--------------------- */}
                  <div className="mb-4">
                    <MDBTypography tag="h6" className="mb-2">
                      Comentario:
                    </MDBTypography>
                    <MDBInput
                      type="textarea"
                      style={{ width: "550px", height: "100px" }}
                      value={comment}
                      onChange={handleCommentChange}
                    />
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}
