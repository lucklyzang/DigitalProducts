<template>
	<view class="content-box">
		<uni-nav-bar height="50px" title="订单详情" :statusBar="true" :border="false" background-color="#252525" color="#fff"
			left-icon="left"
			@clickLeft="backTo"
		/>
		<view class="content-top">
			<uni-icons type="refresh" size="80" color="#f9ce61"></uni-icons>
			<text>待付款</text>
			<text>支付剩余时间 14:28</text>
		</view>
		<view class="content-center">
			<view class="top">
				<view class="img-show">
					<image src="/static/img/default-person.jpg"/>
				</view>
				<view class="text-show">
					<text>伎乐赋·竖琴赋</text>
					<text>成都艺博通电子商务服务有限公司</text>
				</view>
			</view>
			<view class="bottom">
				<view>
					<text>订单金额</text>
					<text>39.90元</text>
				</view>
				<view>
					<text>交易数量</text>
					<text>1</text>
				</view>
				<view>
					<text>创建时间</text>
					<text>2022-04-11 14:03:18</text>
				</view>
				<view>
					<text>订单编号</text>
					<text>2372839273829372897</text>
				</view>
			</view>
		</view>
		<view class="content-bottom">
			<view>
				<text>取消订单</text>
			</view>
			<view>
				<text>去付款</text>
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
				uni.redirectTo({
					url: '/digitalCollectPage/pages/myOrderForm/index/index'
				})
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
			height: 200px;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			text {
				&:nth-child(2) {
					font-size: 21px;
					color: #FFFFFF;
					font-weight: bold;
					margin: 8px 0;
				};
				&:nth-child(3) {
					font-size: 14px;
					color: #848484;
				}
			}
		};
		.content-center {
			.top {
				width: 94%;
				margin: 0 auto;
				margin-top: 30px;
				box-sizing: border-box;
				height: 120px;
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
				padding-right: 10px;
				border-radius: 10px;
				background: rgb(61, 61, 61);
				.img-show {
					width: 120px;
					height: 120px;
					border-top-left-radius: 10px; 
					border-bottom-left-radius: 10px; 
					image {
						width: 100%;
						height: 100%;
						border-top-left-radius: 10px;
						border-bottom-left-radius: 10px; 
					}
				};
				.text-show {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 16px;
					padding: 10px 0;
					flex: 1;
					text {
						&:nth-child(1) {
							font-size: 17px;
							color: #FFFFFF
						};
						&:nth-child(2) {
							font-size: 12px;
							color: #868282;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap
						}
					}
				}
			};
			.bottom {
				width: 94%;
				margin: 0 auto;
				margin-top: 30px;
				>view {
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					font-size: 14px;
					color: #FFFFFF;
					line-height: 30px;
				}
			}
		};
		.content-bottom {
			width: 94%;
			margin: 0 auto;
			margin-top: 30px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			>view {
				font-size: 16px;
				width: 150px;
				height: 45px;
				border-radius: 30px;
				text-align: center;
				line-height: 45px;
				&:first-child {
					background: #333;
					color: #fff;
					margin-right: 20px;
				};
				&:last-child {
					background: linear-gradient(to right, #e6c980, #f7c241);
					color: #fff
				}
			}
		}
	}
</style>




