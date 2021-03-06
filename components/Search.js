Search = React.createClass({

    getInitialState: function () {
        return {
            searchingText: ''
        };
    },

    handleChange: function (event) {
        var searchingText = event.target.value;
        this.setState({
            searchingText: searchingText
        });

        if (searchingText.length > 2) {
            this.props.onSearch(searchingText);
        }
    },

    handleKeyUp: function (event) {
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchingText);
        }
    },

    render: function () {
        var styles = {
            fontSize: '1.5em',
            width: '100%',
            maxWidth: '350px',
            padding: '10px',
        };

        return <input
        type = "text"
        onChange = {
            this.handleChange
        }
        onKeyUp = {
            this.handleKeyUp
        }
        placeholder = "Enter search phrase here"
        style = {
            styles
        }
        value = {
            this.state.searchingText
        }
        />
    }
});
