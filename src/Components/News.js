import React, { Component } from 'react'
import Newsitems from './Newsitems';
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pagesize: 5,
        catagory: 'general'
    }
    static propTypes = {
        country: propTypes.string,
        catagory: propTypes.string,
        pagesize: propTypes.number
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.catagory)}- Taza news`
    }
    async updatenews() {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedata = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updatenews();
    }
    handlePrevious = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updatenews();
    }
    handleNext = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updatenews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults
        })
    }
    render() {
        return (
            <>
                <h1 className="text-center my-4">Taza News - Top {this.capitalizeFirstLetter(this.props.catagory)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitems title={element.title}
                                        discription={element.description}
                                        imageurl={element.urlToImage}
                                        Newsurl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
export default News


