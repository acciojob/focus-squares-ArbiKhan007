
document.addEventListener('DOMContentLoaded', function() {
	//your JS code here. If required.
	const squares=document.querySelectorAll(".square");
	
	squares.forEach(square=>{
		square.addEventListener("mouseover", (e)=>{
			const targetId=e.currentTarget.id;
	
			squares.forEach(s=>{
				if(s.id!==targetId){
					s.style.backgroundColor="#6F4E37";
				}
			})
		});
	
		square.addEventListener("mouseout", (e)=>{
			squares.forEach(s=>{
				s.style.backgroundColor="#E6E6FA";
			});
		})
	});
});