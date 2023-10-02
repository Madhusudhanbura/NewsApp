import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'

  const News = (props) => {
    
    
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // get the news and update it
    const updateNews = async () => {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      
      setLoading(true)
      
      props.setProgress(30);
      let data = await fetch(url);
      let parsedData = await data.json();
      
      props.setProgress(80);

      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      
      props.setProgress(100);
    }

    
    // fetch data dynamically as we scroll down
    const fetchMoreData = async () => {
      
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page + 1)
      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)

    }

    useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - TaazaKhabar`

      updateNews()
    }, [])
    

      return (
        <>
          <h1 className='text-center' style={{ margin: '40px 0px', marginTop: '90px' }}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          {loading && <Spinner />}

          
          <InfiniteScroll
            dataLength={articles.length} 
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
              <div className='row'>
                {articles.map((article) => {
                  return <div className="col-md-4" key={article.url}>
                    <NewsItem title={article.title ? (article.title.length > 40 ? article.title.slice(0, 40) : article.title) : "**"} description={article.description ? (article.description.length > 88 ? article.description.slice(0, 88) : article.description) : "**"} imgUrl={article.urlToImage} newsUrl={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </>
      )
  }


News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'business'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
