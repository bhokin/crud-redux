import React, { Component } from 'react'
import { connect } from 'react-redux';

class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({
            type: 'UPDATE_POST',
            id: this.props.post.id,
            data: data
        });
    }

    render() {
        return (
            <div className="post">
                <form onSubmit={this.handleEdit}>
                    <input type='text' ref={(input) => { this.getTitle = input; }}
                        defaultValue={this.props.post.title}
                        placeholder='Enter post title' required />
                    <br /><br />
                    <textarea rows='5' cols='30' ref={(input) => { this.getMessage = input; }}
                        defaultValue={this.props.post.message}
                        placeholder='Enter post description'></textarea>
                    <br /><br />
                    <button type=''>Update</button>
                </form>
            </div>
        )
    }
}

export default connect()(EditComponent);
