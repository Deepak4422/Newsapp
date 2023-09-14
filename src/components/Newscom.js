import React, { Component } from "react";
import News from "./News";
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class Newscom extends Component {
 
  static defaultProps={
    category: 'science',
    country: 'in',
    pageSize: 8
  }
  static propTypes={
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number
  }
  title=(string)=>
  {
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true,
      page:1,
  

    };
    document.title=`${this.title(this.props.category)} gossip-aunty`;
  }
  async loadfunction()
  {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey} &page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedata = await data.json();
    this.setState({ article: parsedata.articles,   totalResults: parsedata.totalResults ,loading: false});
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.loadfunction();
  }
  // prevpage=async ()=>{
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1dc44460d52a4de6a715f165883cc976&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();
  //   this.setState({ page: this.state.page-1});
  //   this.loadfunction();
  // }
  // nextpage=async ()=>{
   
  
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1dc44460d52a4de6a715f165883cc976&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();
  //   this.setState({  page:this.state.page+1});
  //   this.loadfunction();
  
  // }
  fetchMoreData=async ()=>{
    this.setState({page: this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey} &page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ article: this.state.article.concat(parsedata.articles),   totalResults: parsedata.totalResults });
  }
  render() {
    return (
     
      <div className="container">
        <h1 className="text-center text-primary" style={{margin: "30px 0px"}}>Top news headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !==this.state.totalResults}
          loader={<Spinner/>}   >
      
        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-3">
                <News
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  url={element.url}  author={element.author} date={element.publishedAt} source={element.source.name}
                />
              </div>
              
            );
          })}
      </div>
      </InfiniteScroll>
      </div>
    
    );
  }
}

export default Newscom;
