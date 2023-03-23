import React, { Component } from 'react'

export class Newsitems extends Component {
    render() {
        let { title, discription, imageurl, Newsurl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imageurl ? "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text" >{discription}...</p>
                        <p className="card-text"><small className="text-muted"> By {!author ? "Unnoun" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={Newsurl} target="_blank" className="btn  btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Newsitems
