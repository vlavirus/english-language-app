import React from 'react';
import {GameStoreServiceConsumer} from '../gamestore-service-context';

const withGamestoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <GameStoreServiceConsumer> 
                {
                    (gamestoreService) => {
                        return (<Wrapped {...props} 
                            gamestoreService={gamestoreService}/>)
                    }
                }
            </GameStoreServiceConsumer>
        )
    }
}

export default withGamestoreService;