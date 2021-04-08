import React from 'react'; 
import './Projects.css';
import Test from './Test.PNG';


const Projects = () => { 
    return ( 
        <div>
            <div className='card'> 
                <div className='img-container'><img src={Test} alt='Test-Project'></img></div>
                <div className='project-desc'>
                    <h3 className='title'>Title</h3>
                    <p className='info'>Praesent erat augue, tristique ac nulla eget, ullamcorper elementum erat. 
                    Aliquam condimentum a risus ut hendrerit. Duis imperdiet tincidunt diam in rutrum. Duis mattis 
                    scelerisque tortor, sit amet lobortis augue blandit a. Pellentesque libero augue, dignissim id sapien ac, congue ultricies urna. 
                    Duis gravida porttitor magna, sit amet luctus nisl mattis et. Praesent id ullamcorper diam, quis sodales tellus.</p>
                    <div className='btn-container'>
                        <button className='projec-btns'>Code</button>
                        <button className='projec-btns'>Website</button>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Projects; 