/* eslint-disable jsx-a11y/anchor-is-valid */
import Carousel from "react-bootstrap/Carousel";

export function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/bg_1.jpg"
          alt="First slide"
          style={{ maxHeight: "750px" }}
        />
        <Carousel.Caption>
          <h4>First slide label</h4>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>
            <a href="#" className="btn btn-success">
              View Details
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/bg_2.jpg"
          alt="Second slide"
          style={{ maxHeight: "750px" }}
        />
        <Carousel.Caption>
          <h4>Second slide label</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            <a href="#" className="btn btn-success">
              View Details
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/bg_3.jpg"
          alt="Third slide"
          style={{ maxHeight: "750px" }}
        />
        <Carousel.Caption>
          <h4>Third slide label</h4>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <p>
            <a href="#" className="btn btn-success">
              View Details
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
