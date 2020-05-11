import React from 'react';

const Searchbox = ({searchChange}) =>{
	return(
			<div className='pa2 ma3 br2 tc'>
				<input type='search' placeholder='Search Robots'  className='pa3 ba b--green bg-lightest-blue'
				 onChange={searchChange} />
			</div>
		);
}

export default Searchbox;