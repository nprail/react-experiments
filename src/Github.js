import React, {Component} from 'react';
import axios from 'axios';

const Card = (props) => {
    return (
        <div style={{
            margin: '1em'
        }}>
            <img width="75" alt={props.name} src={props.avatar_url}/>
            <div
                style={{
                display: 'inline-block',
                marginLeft: 10
            }}>
                <div
                    style={{
                    fontSize: '1.25em',
                    fontWeight: 'bold'
                }}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    )
}

export const CardList = (props) => {
    return (
        <div>
            {props
                .cards
                .map(card => <Card key={card.id} {...card}/>)}
        </div>
    )
}

export class Form extends Component {
    state = {
        userName: ''
    }
    handelSubmit = (event) => {
        event.preventDefault();
        axios
            .get(`https://api.github.com/users/${this.state.userName}`)
            .then((resp) => {
                this.props.onSubmit(resp.data);
                this.setState({userName:''});
            });
    }
    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input
                    type='text'
                    value={this.state.userName}
                    onChange={(event) => this.setState({userName: event.target.value})}
                    placeholder='GitHub username'
                    required/>
                <button type='submit'>Add card</button>
            </form>
        )
    }
}