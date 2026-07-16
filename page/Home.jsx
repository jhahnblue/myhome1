import Carousel from 'react-bootstrap/Carousel'
import '../src/index.css'

function Home(){
    return(
        <div className="container" >
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="../image/1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>첫 번째 슬라이드</h3>
                    <p>이미지와 텍스트를 추가할 수 있습니다.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="../image/2.jpg"
                    alt="Second slide"
                              
                    />
                    <Carousel.Caption>
                    <h3>두 번째 슬라이드</h3>
                    <p>다양한 콘텐츠를 넣을 수 있어요.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="../image/3.jpg"
                    alt="Third slide"
                              
                    />
                    <Carousel.Caption>
                    <h3>세 번째 슬라이드</h3>
                    <p>자동으로 넘어가는 슬라이드입니다.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="../image/4.jpg"
                    alt="Third slide"
                              
                    />
                    <Carousel.Caption>
                    <h3>세 번째 슬라이드</h3>
                    <p>자동으로 넘어가는 슬라이드입니다.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

// Home 태그 아무대 사용 가능
export default Home