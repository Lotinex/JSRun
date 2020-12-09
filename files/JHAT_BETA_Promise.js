const db = []
class JHAT {
	static get(request){
		let $ = request;
	return new Promise((rs, rj) => {
if(db.indexOf($) != -1) rs('found')
else rj('not found(404)')
})
	}
}
JHAT.get('hi')
.catch(e => console.log(e))
