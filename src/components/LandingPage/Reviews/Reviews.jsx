import { useState, useEffect } from "react";
import { Carousel, Card } from "react-bootstrap";
import Rating from "react-rating";
import styles from "./reviews.module.css";

const Reviews = () => {
  const itemsPerPage = window.innerWidth <= 768 ? 1 : 3; // Mostrar 1 card en pantalla pequeña, 3 en pantalla grande
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

  const renderTestimonialsGroup = (groupIndex) => {
    const startIndex = groupIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return dataReview.slice(startIndex, endIndex).map((review, idx) => (
      <Card key={startIndex + idx} className={styles.card}>
        <h2 style={{ fontSize: "30px", height: "80px", fontWeight: "bolder" }}>
          {review.usuario.dato.nombre}
        </h2>
        <Rating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          
        />
        <h2 style={{ height: "23px", fontSize: "20px" }}>{review.contenido}</h2>
      </Card>
    ));
  };

  return (
    <div className={styles.testimonialsContainer}>
      <h2 style={{ color: "black", fontSize: "40px", fontWeight: "bolder" }}>
        Dejanos tu valoración
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
  );
};

export default Reviews;
