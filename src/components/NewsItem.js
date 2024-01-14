import React from 'react'

  const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    let noImg = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";

    return (
      <div className='my-3'>
        <div className="card">  
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex: '1'}}>{source}</span>
              
          <img src={imgUrl ? imgUrl : noImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
