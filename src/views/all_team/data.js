export default [
	{
		// 团队的
		tuandui: {
			a: 30,
				b: 20,
				c: 50,
			// 团队名
			name: '',

			// 扣税点
			kousui: 0.07,

			// 业绩
			shangxun_fei_ruanjian_yeji: '',
			shangxun_ruanjian_yeji: '',
			xiaxun_fei_ruanjian_yeji: '',
			xiaxun_ruanjian_yeji: '',
			yeji: '',

			// 提成比例
			ruanjian_ticheng_bili: '',
			fei_ruanjian_ticheng_bili: '',


			// 毛利（税后毛得润）
			shangxun_fei_ruanjian_maoli: '',
			shangxun_ruanjian_maoli: '',
			shangxun_ruanjian_maoli: '',
			xiaxun_fei_ruanjian_maoli: '',
			xiaxun_ruanjian_maoli: '',
			xiaxun_ruanjian_maoli: '',
			maoli: '', 	//一个月的总毛利


			// 成本
			shangxun_gongzi_chengben: '',
			shangxun_qita_chengben: '',
			shangxun_chengben: '',
			xiaxun_gongzi_chengben: '',
			xiaxun_qita_chengben: '',
			xiaxun_chengben: '',
			chengben: '',	//一个月的总成本


			// 营业利润
			shangxun_yingli_lirun: '',
			xiaxun_yingli_lirun: '',
			yingli_lirun: '',	//一个月的营业利润

			// 提成
			ticheng_bili: 0.4,
			shangxun_ticheng: '',
			xiaxun_ticheng: '',
			ticheng: '',	//一个月的提成

		},

		// 该团队下的所有客服
		kefus: [
			{
				
				// 客服名
				name: '',	//客服a
				
				// 扣税点
				kousui: 0.07,

				// 业绩
				shangxun_fei_ruanjian_yeji: '',
				shangxun_ruanjian_yeji: '',
				xiaxun_fei_ruanjian_yeji: '',
				xiaxun_ruanjian_yeji: '',
				yeji: '',

				// 毛利（税后毛得润）
				shangxun_fei_ruanjian_maoli: '',
				shangxun_ruanjian_maoli: '',
				shangxun_ruanjian_maoli: '',
				xiaxun_fei_ruanjian_maoli: '',
				xiaxun_ruanjian_maoli: '',
				xiaxun_ruanjian_maoli: '',
				maoli: '', 	//一个月的总毛利

				// 所在推广团队的贡献比率~~
				shangxun_gongxian_bili: '',
				xiaxun_gongxian_bili: '',
				gongxian_bili: '',

				// 成本
				shangxun_gongzi_chengben: '',
				shangxun_qita_chengben: '',
				shangxun_chengben: '',
				xiaxun_gongzi_chengben: '',
				xiaxun_qita_chengben: '',
				xiaxun_chengben: '',
				chengben: '',	//一个月的总成本

				// 营业利润
				shangxun_yingli_lirun: '',
				xiaxun_yingli_lirun: '',
				yingli_lirun: '',	//一个月的营业利润

				// 提成
				ticheng_bili: 0.3,
				shangxun_ticheng: '',
				xiaxun_ticheng: '',
				ticheng: '',	//一个月的提成
			}
			// ,{ name: 'b' }	//客服b
		]
	}
]