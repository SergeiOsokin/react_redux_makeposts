import React from 'react';
import { connect } from 'react-redux';
import {createPost, showAlert, hideAlert } from '../redux/actions';
import Warning from './Warnings';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();
        const { title } = this.state;

        if (!title.trim()) {
            return this.props.showAlert('Поле пустое!')
        }

        const newPost = {
            title, 
            id: Date.now().toString()
        };
        //с помощью нее вызывает диспатч и изменяем наш стейт (хранилище), по сути добавляем пост в хранилище
        this.props.createPost(newPost);
        
        this.setState({
            title: ''
        });
    }

    changeHandler(event) {
        event.persist();
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                { this.props.alert && <Warning text={this.props.alert} />}

                <div className="form-group">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="title" 
                        name="title"
                        value={this.state.title} 
                        onChange={this.changeHandler} 
                    />
                </div>
                <button className="btn btn-success" type='submit'>Запостить</button>
            </form>
        )
    } 
};
//теперь в this.props есть функция createPost которая лежит в actions.js. Т.е. какие action проецировать на свойства компонента
const mapDispatchToProps = {
    createPost,
    showAlert,
    hideAlert
};

const mapStateToProps = (state) => ({
    alert: state.app.alert
})

// соединяем хранище с компоненотом
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);