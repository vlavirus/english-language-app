import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPlayers} from '../../actions'


import './card-header.scss';

class CardHeader extends Component {

    componentDidMount() {
        this.props.addPlayers()
    }

    render() {
        const {currentCountUsers, players, activePlayer} = this.props;
        return (
            <header className="header">
                {teamGenerator(currentCountUsers, players, activePlayer)}
            </header>
        )
    }

}

const teamGenerator = (currentCountUsers, players, activePlayer) => {
   
    let answer = [];

    for (let player in players) {
        let classElement = "header-team__name";
        if (player == activePlayer) {
            classElement = "header-team__name header-team__name_active"
        } else {
            classElement = "header-team__name"
        }

        answer.push(
            <div key={player} className="header-team">
                <div className={classElement}>Team {+player + 1}</div>
                <div className="header-team__score">{players[player]}</div>
            </div>
        )
    }
    
    return answer;
}

const mapStateToProps = ({score:{players, activePlayer}}) => {
    return {
        players, activePlayer
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        addPlayers: (newPlayer) => {
            dispatch(addPlayers(newPlayer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHeader);