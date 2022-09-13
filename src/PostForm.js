import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            isEdited: false
        };
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    };

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' ref={(input) => { this.getTitle = input; }}
                        placeholder='Enter post title' required />
                    <br /><br />
                    <textarea rows='5' cols='30' ref={(input) => { this.getMessage = input; }}
                        placeholder='Enter post description'></textarea>
                    <br /><br />
                    <button type=''>Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);
