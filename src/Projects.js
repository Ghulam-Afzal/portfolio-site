import React from 'react'; 

const Projects = () => { 
    const url = 'https://images.unsplash.com/photo-1616323174408-ec48c6914524?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    return ( 
        <div>
            <div className='card'> 
                <h3>Title</h3>
                <img src={url} alt='prop'></img>
                <p className='info'>Praesent erat augue, tristique ac nulla eget, ullamcorper elementum erat. 
                Aliquam condimentum a risus ut hendrerit. Duis imperdiet tincidunt diam in rutrum. Duis mattis 
                scelerisque tortor, sit amet lobortis augue blandit a. Pellentesque libero augue, dignissim id sapien ac, congue ultricies urna. 
                Duis gravida porttitor magna, sit amet luctus nisl mattis et. Praesent id ullamcorper diam, quis sodales tellus.</p>

            </div>
        </div>
    )

}


export default Projects; 