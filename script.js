
document.addEventListener('DOMContentLoaded', function() {
	//your JS code here. If required.
	const squares=document.querySelectorAll(".square");
	
	squares.forEach(square=>{
		square.addEventListener("mouseover", (e)=>{
			const targetId=e.currentTarget.id;
	
			squares.forEach(s=>{
				if(s.id!==targetId){
					s.classList.add("square_coffee");
					s.classList.remove("square");
				}
			})
		});
	
		square.addEventListener("mouseout", (e)=>{
			squares.forEach(s=>{
				s.classList.remove("square_coffee");
				s.classList.add("square");
			});
		})
	});
});