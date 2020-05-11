import React from 'react';

/*const Card = ({name, email, id}) => {         If we dont want to use props keyword again and again use this syntax instead of below  */
const Card = (props) => {
	return (
		<div className='bg-light-green dib ma2 tc br3 pa2 grow bw2 shadow-5'>
			<img alt="robot" src={`https://robohash.org/${props.id}?size=200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;