export default class GamestoreService {
	data = [
		["Let me...", "...go home.", true, 0],
		["I like...", "...swimming.", true, 0],
		["I don't mind...", "... doing homework in this noise.", true, 0],
		["I love...", "...skating.", true, 0],
		["I prefer...", "...go home.", true, 0],
		["I prefer...", "...walking to sitting.", true, 0],
		["I might...", "...write a letter for my English lesson.", true, 0],
		["I hate...", "..drinking cola.", true, 0],
		["I practise...", "...writting letters.", true, 0],
		["I often make my sister ...", "...clean her room.", true, 0],
		["I enjoy...", "...seeing my boyfriend.", true, 0],
		["I want...", "...to sell my car.", true, 0],
		["I would like...", "...to earn a lot of money.", true, 0],
		["I decided...", "...to meet with my friends.", true, 0],
		["I learn...", "...to drive a car.", true, 0],
		["I'm good at...", "...swimming.", true, 0],
		["I wish...", "...to pass my matura exam.", true, 0],
		["I must...", "...learn a lot.", true, 0],
		["I hope...", "...to pass my exam.", true, 0],
		["I offer...", "...to help you with your homework.", true, 0],
		["I keep...", "...learning Gerund and Infinitive.", true, 0],
		["I managed...", "...to do a big project.", true, 0],
		["I can...", "...sing in English.", true, 0],
		["I need...", "...to earn more money.", true, 0],
		["I can't stand...", "...paying taxes.", true, 0],
		["I started...", "...riding a bike last year.", true, 0],
		["I arranged...", "...to meet everyone at my birthday party.", true, 0],
		["I try...", "...to remember verbs. * I do my best to do it.", true, 0],
		["I dislike...", "...running.", true, 0],
		["I may...", "...choose healthy food for you.", true, 0],
		["I miss...", "...meeting my grandmother.", true, 0],
		["I agreed...", "...to come to your party.", true, 0],
		["I avoid...", "...eating pizza.", true, 0]
	]
	
	getGames() {
		return new Promise((resolve)=> {
			setTimeout(()=>{
				resolve(this.data)
			}, 700)
		});
	}
}