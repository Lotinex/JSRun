var $data = {};
$data.Admin = ['KR','MY','KT']
var isAdmin = (res, ...args)=> {
	return $data.Admin.indexOf(res) != -1 ? true : false;
}
function request(res, ...args){
	if(!$data.profile){
		$data.profile.id = res.id;
	return;
	}
	var temp = res.id
	return isAdmin(temp)
}
