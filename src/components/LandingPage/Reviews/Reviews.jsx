import { useState, useEffect } from "react";
import { Carousel, Card } from "react-bootstrap";
import Rating from "react-rating";
import styles from "./reviews.module.css";
import ReviewForm from "./ReviewForm/ReviewForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Asegúrate de importar el icono de la estrella
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa los estilos de FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faStar); // Agrega el icono de la estrella a la biblioteca



const Reviews = () => {
  const itemsPerPage = window.innerWidth <= 768 ? 1 : 3;
  const [activeGroup, setActiveGroup] = useState(0);
  const [dataReview, setDataReview] = useState([]);
  const totalItems = dataReview.length;
  const totalGroups = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = window.innerWidth <= 768 ? 1 : 3;
      if (newItemsPerPage !== itemsPerPage) {
        setActiveGroup(0);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [itemsPerPage]);

  useEffect(() => {
    // Realizar una solicitud GET a la ruta deseada
    fetch("http://localhost:3001/reviews/get_reviews")
      .then((response) => response.json())
      .then((data) => {
        setDataReview(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSelect = (selectedIndex, e) => {
    e.preventDefault();
    setActiveGroup(selectedIndex);
  };

  const renderStars = (numStars) => {
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push(
        <FontAwesomeIcon icon="star" style={{ color: "orange" }} key={i} />
      );
    }

    return stars;
  };

  

  const renderTestimonialsGroup = (groupIndex) => {
    const startIndex = groupIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return dataReview.slice(startIndex, endIndex).map((review, idx) => (
      <Card key={startIndex + idx} className={`${styles.card} effect-3`}>
        <h2 style={{ fontSize: "20px", height: "20px" }}>
          {review.usuario.dato.nombre}
        </h2>
        <div style={{ height: "23px", fontSize: "12px" }}>
          {renderStars(review.puntos)}
        </div>
        <h2 style={{ height: "115px", fontSize: "17px" , color:"white"}}>
          {review.contenido}
        </h2>
      </Card>
    ));
  };










  return (
    console.log(dataReview, 'DATA REVIEW'),
    <div style={{ margin: 0 }}>
      <div className={styles.testimonialsContainer}>
      <h2 style={{ color: 'var(--bs-heading-color', fontSize: '40px' }}>
          Nuestros Clientes
        </h2>
        <br />
        <Carousel
          activeIndex={activeGroup}
          onSelect={handleSelect}
          interval={null}
          wrap={true}
          variant="dark"
          className={styles.carousel}
          indicators={false}
        >
          {Array.from({ length: totalGroups }).map((_, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <div className={styles.carouselRow}>
                {renderTestimonialsGroup(groupIndex)}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* <ReviewForm /> */}
    </div>
  );
};

export default Reviews;