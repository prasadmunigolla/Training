import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './head.css';


class Body extends React.Component{
    render(){
        return(
            <div className='Mainpage'>
                <div className='row'>
                    <div className='col-sm-9'>
                        <ControlledCarousel />
                        </div>
                    
                    <div className='col-sm-3'>
                        <div className="right">
                        <ul>
                            <a href=""><li><img src="https://img.icons8.com/color/48/000000/html-5.png"/> HTML</li></a>
                            <a href=""><li><img src="https://img.icons8.com/color/48/000000/css3.png"/> CSS</li></a>
                            <a href=""><li><img src="https://img.icons8.com/color/48/000000/javascript.png"/> JavaScript</li></a>
                            <a href=""><li><img src="https://img.icons8.com/color/48/000000/react-native.png"/> React</li></a>
                            <a href=""><li><img src="https://img.icons8.com/color/48/000000/nodejs.png"/> Node js</li></a>
                            <a href=""><li><img src="https://img.icons8.com/color/48/000000/angularjs.png"/> Angular</li></a>
                        </ul>
                        </div>
                    </div>
                </div>
                
                <div className='row content'>
                    <div className='col-sm-9'>
                    <div className='row'>    
                    <div className='col-sm-6'>
                        <h2>What is Lorem Ipsum?</h2>
                        <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Why do we use it?</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    </div>
                    <div className='row'> 
                    <div className='col-sm-6'>
                        <h2>Where does it come from?</h2>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Where can I get some?</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-sm-3'>
                        <h2>References</h2>
                        <a className='reference' href="https://www.w3schools.com">https://www.w3schools.com</a><br />
                        <a className='reference' href="https://www.reactjs.org">https://www.reactjs.org</a><br />
                        <a className='reference' href="https://www.javatpoint.com">https://www.javatpoint.com</a><br />
                        <a className='reference' href="https://react-bootstrap.netlify.com">https://react-bootstrap.netlify.com</a>
                    </div>
                </div>
                
                </div>
        )
    }
}
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_960_720.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_960_720.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2019/03/16/22/06/sitemap-4059862_960_720.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }

export default Body ;