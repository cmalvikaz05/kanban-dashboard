import React from 'react';
 

function SelectGrouping(props){
	function handler(event) {
        const group=event.target.grouping.value;
		const order =event.target.ordering.value;
 
		props.callbackfunc(group, order, false);
		event.target.grouping.value="";
		event.preventDefault();		
	}
	return (
		<> 	
			<form onSubmit={handler} >	 
				<label>Grouping: </label>
				<select  name ="grouping"  >	
					<option value="status">Status</option>
					<option value="user">User</option>
					<option value="priority">Priority</option>
					
				</select>
			 
				<label>Ordering: </label>
				<select  name ="ordering"  >	
					<option value="priority">Priority</option>
					<option value="title">Title</option>
					
				</select>
				<input style = {{color : "white" , backgroundColor : "grey" }} 
						type = "submit" value = "Submit"/>
			</form> 
		</>	
	);

}

export default SelectGrouping