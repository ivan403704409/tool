import getPercent from 'src/util/percent.js'
// 软件提成比例
const  percentNotSortfare = [
	{ value: 5999,  percent: 10,  },
	{ value: 11999, percent: 12,  },
	{ value: 17999, percent: 14,  },
	{ value: 23999, percent: 16,  },
	{ value: 29999, percent: 18,  },
	{ value: 49999, percent: 20,  },
	{ value: 79999, percent: 22,  },
	{ value: 80000, percent: 24,  }
]

// 非软件提成比例
const percentSortware = [
	{ value: 9999,   percent: 10 },
	{ value: 19999,  percent: 12 },
	{ value: 29999,  percent: 14 },
	{ value: 39999,  percent: 16 },
	{ value: 49999,  percent: 18 },
	{ value: 79999,  percent: 20 },
	{ value: 119999, percent: 22 },
  { value: 120000, percent: 24 }
]

export const getPercentNotSortware = getPercent(percentNotSortfare)
export const getPercentSortware = getPercent(percentSortware)
export default{
	getPercentNotSortware,
	getPercentSortware,
}
