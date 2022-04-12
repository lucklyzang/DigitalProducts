<template>
	<view class="content-box">
		<uni-nav-bar height="50px" title="我的订单" :statusBar="true" :border="false" background-color="#252525" color="#fff"
			left-icon="left"
			@clickLeft="backTo"
		/>
		<view class="content-top">
			<view class="tab-switch" :animation="animationData">
				<text v-for="(item,index) in tabTitlelList" :key="index" @click="tabSwitchEvent(index)"
					:class="{'active-tab-style': index === currentTabIndex }"
				>
					{{
						 item.name
					}}
				</text>
			</view>
		</view>
		<view class="content-bottom">
			<view class="all-order">
				<view class="order-list" @click="orderDetailsEvent">
					<view class="left">
						<view class="img-show">
							<image src="/static/img/default-person.jpg"/>
						</view>
						<view class="text-show">
							<text>伎乐赋·竖琴赋</text>
							<text>成都艺博通电子商务服务有限公司</text>
							<text>¥39.90</text>
						</view>
					</view>
					<view class="right">
						<view>
							<uni-icons type="refresh" size="10" color="#e6c980"></uni-icons>
							<text>待支付</text>
						</view>
						<view>
							<text>
								去付款
							</text>
						</view>
					</view>
				</view>
				<view class="no-more-data">
					<text>没有更多数据</text>
				</view>
			</view>	
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	import {
		setCache,
		removeAllLocalStorage
	} from '@/common/js/utils'
	import {
	} from '@/api/login.js'
	export default {
		components: {
		},
		data() {
			return {
				tabTitlelList: [
					{name: '全部'},
					{name: '待付款'},
					{name: '已付款'},
					{name: '已取消'}
				],
				currentTabIndex: 0,
				animationData: []
			}
		},
		onReady() {},
		computed: {
			...mapGetters([
			])
		},
		mounted() {
		},
		methods: {
			...mapMutations([
			]),
			backTo () {
				uni.switchTab({
				  url: '/pages/personInfo/personInfo'
				});
			},
			// tab切换事件
			tabSwitchEvent (index) {
				this.currentTabIndex = index;
				console.log(index,this.currentTabIndex)
			},
			// 跳转订单详情页面
			orderDetailsEvent () {
				uni.redirectTo({
				    url: '/digitalCollectPage/pages/orderFormDetails/index/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "~@/common/stylus/variable.scss";
	::v-deep.uni-navbar {
		position: sticky;
		background: #252525;
		width: 100%;
		z-index: 200;
		.uni-navbar__header-container-inner {
			.uni-nav-bar-text {
				font-size: 18px !important
			}
		};
		.uni-navbar__header-btns {
			.uni-icons {
				font-size: 26px !important
			}
		}
	};
	.content-box {
		@include content-wrapper;
		background: #252525;
		.content-top {
			.tab-switch {
				position: sticky;
				top: 50px;
				background: #252525;
				width: 100%;
				z-index: 200;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				text {
					display: inline-block;
					color: #777575;
					font-size: 17px;
					width: 100px;
					height: 60px;
					line-height: 60px;
					text-align: center;
				};
				.active-tab-style {
					color: #FFFFFF;
					font-size: 19px;
					font-weight: bold;
					position: relative;
					&:after {
					  content: '';
					  position: absolute;
						bottom: 0;
						left: 50%;
						transform: translateX(-50%);
						width: 26px;
						height: 4px;
						background: #facd7a;
						border-radius: 2px;
					}
				};
			  };
		};
		.content-bottom {
			width: 95%;
			margin: 0 auto;
			margin-top: 16px;
			padding-bottom:40px;
			box-sizing: border-box;
			position: relative;
			.all-order {
				.order-list {
					height: 90px;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					padding-right: 10px;
					border-radius: 20px;
					background: rgb(61,61,61);
					.left {
						display: flex;
						flex-flow: row nowrap;
						.img-show {
							width: 90px;
							height: 90px;
							border-top-left-radius: 20px; 
							border-bottom-left-radius: 20px; 
							image {
								width: 100%;
								height: 100%;
								border-top-left-radius: 20px;
								border-bottom-left-radius: 20px; 
							}
						};
						.text-show {
							display: flex;
							flex-direction: column;
							justify-content: center;
							margin-left: 8px;
							text {
								&:nth-child(1) {
									font-size: 16px;
									color: #FFFFFF
								};
								&:nth-child(2) {
									font-size: 12px;
									color: #868282;
									margin: 6px 0;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									width: 170px;
								};
								&:nth-child(3) {
									font-size: 16px;
									color: #FFFFFF
								};
							}
						}
					};
					.right {
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						>view {
							&:nth-child(1) {
								text {
									margin-left: 4px;
									font-size: 16px;
									color: #e6c980
								}
							};
							&:nth-child(2) {
								width: 80px;
								height: 35px;
								color: black;
								text-align: center;
								line-height: 30px;
								font-size: 14px;
								border-radius: 20px;
								background: linear-gradient(to right, #e6c980, #f7c241);
							};
						}
					}
				};
				.no-more-data {
					position: absolute;
					bottom: 0;
					left: 0;
					height: 40px;
					width: 100%;
					text-align: center;
					line-height: 40px;
					font-size: 14px;
					color: #c0c0c0
				}
			}	
		}
	}
</style>



