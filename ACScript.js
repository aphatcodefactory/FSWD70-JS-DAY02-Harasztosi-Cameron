job_title = ["Engineer", "Teacher", "Doctor","Web Developer"];
Location1 = ["Vienna", "Edinburgh", "Singapore", "Rome"];
partners_name = ["Brian", "Phil", "David", "Alex"];
number_childrens = ["0", "1", "2", "3"];

function crystalGazer() {
	var select_job = job_title[Math.floor(Math.random()*job_title.length)];
	var select_Location1 = Location1[Math.floor(Math.random()*Location1.length)];
	var select_partner = partners_name[Math.floor(Math.random()*partners_name.length)];
	var select_children = number_childrens[Math.floor(Math.random()*number_childrens.length)]
	document.write("You will be a " +  select_job + " in " + select_Location1 + " and married to " + select_partner + " with " + select_children + " children.")
};

crystalGazer()