import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    };

    renderHost(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div key={stream.id} className="item">
                    {this.renderHost(stream)}   
                    <i className="large middle aligned icon camera" /> 
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                    <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    };

    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div style={{background: 'rebeccapurple', padding: '35px', borderRadius: '10px' }}>
              <h2>Streams</h2>  
              <div className="ui celled list" style={{fontSize: '18px'}}>{this.renderList()}</div>
              {this.renderCreate()}
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);