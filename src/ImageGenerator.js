import React, {Component} from "react"

class ImageGenerator extends Component {
    constructor() {
        super()
        this.state = {
            image: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
            roverImages: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=VvmpAJToKHWicld7I7gv2WJ0QxzhRBCh6PBfd9rY")
        .then(res => res.json())
        .then(res => {
            const data = res.photos
            this.setState({
                roverImages: data
            })
        })
    }

    handleClick() {
        console.log(this.state.roverImages)
        const randNum = Math.floor(Math.random() * this.state.roverImages.length)
        const randImage = this.state.roverImages[randNum].img_src
        this.setState({image: randImage})
    }

    render() {
        return (
            <div className="image-container">
                <img src={this.state.image} />
                <button onClick={this.handleClick}>New Image</button>
            </div>
        )
    }
}

export default ImageGenerator