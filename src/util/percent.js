function getPercent(arr){
	return function (num){
		let index = 0
		let len = arr.length
		for(let i=0; i<len; i++){
			let obj = arr[i]
			if(num <= obj.value)return obj.percent/100
			// 最后一个
			else if( i===len-1 && num>=obj.value )return obj.percent/100
		}
	}
}

export default getPercent