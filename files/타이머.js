type = "timer"
option = "false"
const StopTimer = timer => clearInterval(timer);
const Timer = () => {
const o = prompt()
const _H = 	o.split(' ')[0]
const _M = o.split(' ')[1]
const _S = o.split(' ')[2]
let _Ms = (_H * 3600 + _M * 60 + _S)
console.log()
const TimeStamp = setInterval(() => {
	_Ms--;
	console.log(`남은 시간 : ${_H} : ${_M} : ${_S}`)

},1000)
}
Timer()
