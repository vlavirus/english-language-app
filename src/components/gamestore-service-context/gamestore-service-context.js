import React from 'react';

const {
	Provider: GameStoreServiceProvider,
	Consumer: GameStoreServiceConsumer
} = React.createContext();

export {
	GameStoreServiceConsumer,
	GameStoreServiceProvider
};