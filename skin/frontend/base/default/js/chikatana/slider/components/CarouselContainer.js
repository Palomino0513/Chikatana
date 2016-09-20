var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');

export default class CarouselContainer extends React.Component {
    render() {
        return (
            <Carousel>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
            </Carousel>
        );
    }
}
