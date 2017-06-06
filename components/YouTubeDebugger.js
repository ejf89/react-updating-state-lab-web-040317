import React from 'react'

export default class YouTubeDebugger extends React.Component{
    constructor() {
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
        this.setRes = this.setRes.bind(this)
        this.setBit = this.setBit.bind(this)
    }

    setBit() {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        })
    }



    setRes() {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        })
        console.log(this.state.settings.video.resolution)
    }




    render(){
        return(
            <div>
            <button className="bitrate" onClick={this.setBit}> click my other issac </button>
                <button className="resolution" onClick={this.setRes}>click my issaac</button>
            </div>
        )
    }
}
