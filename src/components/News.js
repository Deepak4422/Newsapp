import React, { Component } from 'react'

export class News extends Component {
  render() {
    let { title, description,imageurl, url, author, date,source} =this.props;
    return (
      <div className="card my-3" >
  <img src={imageurl?imageurl:"https://imgeng.jagran.com/images/2023/jul/Samsung%20Z%20Flip%20416842196265751689755052170.jpg"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title!=null? title.slice(0,40): title}</h5>
    <p className="card-text">{description!=null ? description.slice(0,80): description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"anonymous"} on {new Date(date).toGMTString()}</small></p>
    <a href={url}  onClick="window.open(this.href,'_blank'),return false;" className="btn btn-primary btn-sm" type="md">Go somewhere</a>
  </div>
  <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{zIndex : 1}}>
    {source}  <span class="visually-hidden">unread messages</span>
  </span>
</div>
    )
  }
}

export default News
