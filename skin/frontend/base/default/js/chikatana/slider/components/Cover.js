var React = require('react');
var ReactDOM = require('react-dom');
var Coverflow = require('react-coverflow');

export default class Cover extends React.Component {
    render() {
        return (
            <Coverflow
                width={960}
                height={480}
                displayQuantityOfSide={2}
                navigation={false}
                enableHeading={false}
                >
                <img src='http://4.bp.blogspot.com/-buptqfRsbX8/Ui3RkCCwAZI/AAAAAAAAA28/KJ5HCrfG8f8/s1600/onepiece1.jpg' alt='title or description' url="http://andyyou.github.io/react-coverflow/" />
                <img src='http://3.bp.blogspot.com/-7N69hiY_zlY/UAOfDhlIM2I/AAAAAAAABcQ/fXMCeTqPKMA/s1600/2.jpg' url="http://andyyou.github.io/react-coverflow/"/>
                <img src='http://1.bp.blogspot.com/-rXm1-aX71zU/TXNxyEkfbOI/AAAAAAAAAo8/AQ_iXqJlnwo/s1600/001.jpg' url="http://andyyou.github.io/react-coverflow/"/>
                <img src='http://4.bp.blogspot.com/-nA3isH9b_9c/TXpflBBrjXI/AAAAAAAAAsM/wm0mElfQD3A/s1600/001.jpg' url="http://andyyou.github.io/react-coverflow/"/>
                <img src='http://2.bp.blogspot.com/_yJwrvUu8Y3s/TEcuUk7yB2I/AAAAAAAAGLc/QYmI60-nD08/s1600/One+Piece+tomo+5.jpg' url="http://andyyou.github.io/react-coverflow/"/>
            </Coverflow>
        );
    }
}
