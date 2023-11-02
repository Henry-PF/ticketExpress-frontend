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
import axios from "axios";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [data, setData] = useState({
    id_user: localStorage.getItem("id"),
    puntos: 0,
    contenido: "",
  });
  const [error, setError] = useState(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setData({ ...data, puntos: newRating });
  };

  const handleCommentChange = (e) => {
    const newComment = e.target.value;
    setComment(newComment);
    setData({ ...data, contenido: newComment });

    // Validación en tiempo real
    if (newComment.trim() === "" || rating === 0) {
      setError("Los campos no pueden estar vacíos.");
    } else {
      setError(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (comment.trim() === "" || rating === 0) {
      setError("Los campos no pueden estar vacíos.");
      return; // Detener el envío si hay errores
    }
    
    setError(null);
    
    axios
      .post("http://localhost:3001/reviews/create_review", {
        id_user: localStorage.getItem("id"),
        puntos: rating,
        contenido: comment,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Review enviado");
          // Restablecer los campos a sus valores iniciales después de enviar
          setRating(0);
          setComment("");
        } else {
          console.log("Error en la respuesta");
        }
      })
      .catch((error) => {
        alert("Review no pudo enviarse");
      });
  };

  return (
    <>
      <div className="mx-auto gradient-custom" style={{ height: "100vh" }}>
        <MDBRow className="mx-3 container-form">
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
    type="submit"
    form="miFormulario"
    onClick={handleSubmit}
    style={{ width: "150px", height: "40px" }} // Establece el ancho y alto fijo
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

                <form className="mb-0 d-flex flex-column align-items-center justify-content-center" id="miFormulario">
                  <div className="mb-4">
                    <Rating
                      stop={10}
                      initialRating={rating}
                      onChange={handleRatingChange}
                    />
                  </div>

                  <div className="mb-4">
                    <MDBTypography tag="h6" className="mb-2">
                      Comentario:
                    </MDBTypography>
                    <MDBInput
  type="textarea"
  style={{ maxWidth: "700px", width: "500px", height: "100px" }}
  value={comment}
  onChange={handleCommentChange}
/>

                  </div>

                  {error && (
                    <p style={{ color: "red" }}>{error}</p>
                  )}
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}
