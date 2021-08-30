import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeScreen.css";

const HomeScreen = ({ match }) => {
    // const keyword = match.params.keyword;

    // const [products, setProducts] = useState({})
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //     const { data } = await axios.get(`/api/products/${match.params.keyword}`)

    //     setProducts(data)
    // }
    //     fetchProduct()
    // }, []) <- enter keyword to find in backend*

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Container>
            <h1>Product</h1>
            <Slider {...settings}>
                {products.map((product) => (
                    // <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                    // </Col>
                ))}
            </Slider>
        </Container>
    );
};

export default HomeScreen;
