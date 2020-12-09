var go = {
	back : (msg,afSc) => {
		var lv = (afSc == "S") ? 2 : 1
		var isSc = Math.floor(Math.random() * 5 / lv)
		if(isSc) return true
		else return false
	}
}