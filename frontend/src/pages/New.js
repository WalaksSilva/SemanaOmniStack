import React, { Component } from 'react';
import api from '../services/api';
import './New.css'

class New extends Component{
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hastags: ''
    };

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hastags', this.state.hastags);

        await api.post('posts', data);

        this.props.history.push('/');
    };

    handleImageChange = e => {
        this.setState( { image: e.target.files[0] } );
    };

    handleChange = e => {
        this.setState( { [ e.target.name ]: e.target.value } );
    };

    render(){
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange}/>
                <input type="text" onChange={this.handleChange} value={this.state.author} name="author" placeholder="Autor"/>
                <input type="text" onChange={this.handleChange} value={this.state.place}  name="place" placeholder="Local"/>
                <input type="text" onChange={this.handleChange} value={this.state.description}  name="description" placeholder="Descrição"/>
                <input type="text" onChange={this.handleChange} value={this.state.hastags}  name="hastags" placeholder="Hastags"/>
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default New;