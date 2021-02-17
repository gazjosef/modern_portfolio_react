import React from 'react'

export const Gallery = () => {

    function myFunction(imgs) {
        /*
        // Get the expanded image
        var expandImg = document.getElementById("expandedImg");
        // Get the image text
        var imgText = document.getElementById("imgtext");
        // Use the same src in the expanded image as the image being clicked on from the grid
        expandImg.src = imgs.src;
        // Use the value of the alt attribute of the clickable image as text inside the expanded image
        imgText.innerHTML = imgs.alt;
        // Show the container element (hidden with CSS)
        expandImg.parentElement.style.display = "block";
         */
      }


    return (
        <section id="gallery" className="section-gallery">
            <div className="row">
                <div className="column">
                    {/* <img src="" alt="Nature" onclick={myFunction(this)} /> */}
                </div>
                <div className="column">
                    {/* <img src="img_snow.jpg" alt="Snow" onclick={myFunction(this)} /> */}
                </div>
                <div className="column">
                    {/* <img src="img_mountains.jpg" alt="Mountains" onclick={myFunction(this)} /> */}
                </div>
                <div className="column">
                    {/* <img src="img_lights.jpg" alt="Lights" onclick={myFunction(this)} /> */}
                </div>
            </div>

            {/* <!-- The expanding image container --> */}
            <div className="container">
                {/* <!-- Close the image --> */}
                <span onClick="this.parentElement.style.display='none'" className="closebtn">&times;</span>

                {/* <!-- Expanded image --> */}
                {/* <img id="expandedImg" style={"width:100%"} /> */}

                {/* <!-- Image text --> */}
                <div id="imgtext"></div>
            </div>
        </section>
    )
}
