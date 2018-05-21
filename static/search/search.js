//var React = require('react');
//var AppActions = require('../actions/AppActions');
//var AppStore = require('../stores/AppStore');
//var SearchForm = require('./SearchForm.js');
//var MovieResults = require('./MovieResults.js');

function getAppState() {
    return {
        movies: AppStore.getMovieResults()
    }
}

var App = React.createClass({
    getInitialState: function() {
        return getAppState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    render: function() {
        var movie_results = (this.state.movies == '') ? '' : <MovieResults movies={this.state.movies} />;
        return(
            <div>
                <SearchForm />
                {movie_results}
            </div>
        )
    },
    _onChange: function() {
        this.setState(getAppState());
    }
});

var Movie = React.createClass({
    render: function() {
        var movie_link = "http://imdb.com/title/" + this.props.movie.imdbID;
        return (
            <div className="well">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.movie.Poster} alt={this.props.movie.Title} className="img-responsive thumbnail"/>
                    </div>
                    <div className="col-md-8">
                        <h4>{this.props.movie.Title}</h4>
                        <dl>
                            <dt>Title</dt>
                            <dd>{this.props.movie.Title}</dd>
                            <dt>Year Released</dt>
                            <dd>{this.props.movie.Year}</dd>
                            <dt>Type</dt>
                            <dd>{this.props.movie.Type}</dd>
                            <dt>IMDB Link</dt>
                            <dd><a href={movie_link} className="btn btn-success">View on IMDB</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
});

var MovieResults = React.createClass({
    render: function() {
        return (
            <div>
                <h3 className="text-center">Results</h3>
                <hr/>
                {
                    this.props.movies.map(function(movie, index){
                        return (
                            <Movie movie={movie} key={index} />
                        )
                    })
                }
            </div>
        )
    }
});

var SearchForm = React.createClass({
    render: function() {
        return (
            <div className="search-form">
                <h1 className="text-center">Search for a movie</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="title" placeholder="Enter a Movie Title..."/>
                    </div>
                    <button className="btn btn-primary btn-block">Search Movies</button>
                </form>
            </div>
        )
    },
    onSubmit: function(e) {
        e.preventDefault();

        var movie = {
            title: this.refs.title.value.trim()
        }

        AppActions.searchMovies(movie);
    }
});

module.exports = App;