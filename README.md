# 2021-4-26

### <a href="https://daltonjmcgee.github.io/2021-4-26/" target="_blank">Live Demo</a>

### Technologies
* Javascript
* HTML/CSS
* [React](https://reactjs.org/)
* [CRA](https://create-react-app.dev/)
* [GSAP](https://greensock.com/gsap/)
* [GIMP](https://www.gimp.org/)
* [Blender](https://www.blender.org/) 
* [ThreeJS](https://threejs.org/)

### Resources and details

This is the beginning of the website I'm building for my woodworking business. The attempt here is to use ThreeJS and GSAP and Blender to make something that is a little more interesting visually that can also show off the design process of the pieces. I did this by building 3D models, applying materials, normal maps and displacement maps to get a somewhat realistic render both with and without a background. The pieces are then laid on top of each other and removed using gsap to alter the clip-path CSS property to create the hover and transition effects. 

### The Three Dimensional Renders

The furniture images in this were built using the opensource software Blender as well as free materials files from the website [Poliigon](https://www.poliigon.com/) to build the models which were then exported PNGs. The background wireframe was built the same and exported in the [.glb](https://en.wikipedia.org/wiki/GlTF) format and then imported into ThreeJS with the wireframe material applied to it. 

The renders was made with a perspective camera with a focal length of 65mm. I used two pointlights with varying wattages, radii and locations to achieve the lighting effects. 

![](https://github.com/daltonjmcgee/2021-4-26/blob/main/static/images/coffee_table_bg.png)

![](https://github.com/daltonjmcgee/2021-4-26/blob/main/static/images/coffee_table_no_bg.png)
