<template>
	<view class="content-box">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="content-top">
			<view class="person-message-box">
				<view class="message-left">
					<view class="person-picture" @click="toEditPersonPage">
						<image src="/static/img/default-person.jpg"/>
					</view>
					<view class="person-name">
						<view>砂夹石三</view>
						<view>
							<text>还未认证</text>
							<text>2</text>
						</view>
					</view>
				</view>
				<view class="message-right">
					<uni-icons :type="iconName" size="32" color="#fff" @click="toSetPage"></uni-icons>
				</view>
			</view>
			<view class="function-zone">
				<view class="function-zone-icon-list" v-for="(item,index) in zoneIconList" :key="index">
					<uni-icons :type="item.icon" size="32" color="#fff"></uni-icons>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>
		<view class="content-bottom">
			<view class="announcement"></view>
			<view class="my-object">
				<view class="my-object-title">
					<text>我的藏品:</text>
					<text>0</text>
				</view>
				<view class="no-object">
					
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
				versionNumber: '1.8',
				iconName: 'gear-filled',
				zoneIconList: [
					{
						icon: 'bars',
						text: '我的订单'
					},
					{
						icon: 'home',
						text: '转赠记录'
					},
					{
						icon: 'bars',
						text: '消息通知'
					},
					{
						icon: 'plus',
						text: '合成藏品'
					},
					{
						icon: 'chat',
						text: '邀请好友'
					},
					{
						icon: 'bars',
						text: '任务中心'
					},
					{
						icon: 'flag',
						text: '我的权益'
					},
					{
						icon: 'redo',
						text: '联系客服'
					}
				]
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
			toEditPersonPage () {
				uni.redirectTo({
				    url: '/digitalCollectPage/pages/editPersonData/index/index'
				});
			},
			toSetPage () {
				uni.redirectTo({
				    url: '/digitalCollectPage/pages/set/index/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "~@/common/stylus/variable.scss";
	.content-box {
		@include content-wrapper;
		.status_bar {
			height: 50px;
			width: 100%;
			background: #252525;
		};
		.content-top {
			height: auto;
			font-size: 14px;
			background: #252525;
			padding-bottom: 10px;
			.person-message-box {
				width: 92%;
				margin: 0 auto;
				height: 120px;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				.message-left {
					flex: 1;
					padding-left: 6px;
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					.person-picture {
						width: 65px;
						height: 65px;
						border-radius: 50%;
						image {
							width: 100%;
							height: 100%;
							border-radius: 50%
						}
					};
					.person-name {
						color: #fff;
						height: 80px;
						margin-left: 10px;
						font-size: 20px;
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						view {
							&:first-child {
								margin-bottom: 6px;
							};
							&:last-child {
								font-size: 13px;
								display: flex;
								flex-flow: row nowrap;
								text {
									display: inline-block;
									height: 26px;
									text-align: center;
									line-height: 26px;
									background: rgb(73 73 73);
									border-radius: 20px;
									&:first-child {
										width: 100px;
										margin-right: 4px;
									};
									&:last-child {
										width: 60px;
									}
								}
							}
						}
					}
				};
				.message-right {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			};
			.function-zone {
				width: 92%;
				margin: 0 auto;
				height: 150px;
				background: #222222;
				border-radius: 10px;
				display: flex;
				flex-flow: row wrap;
				.function-zone-icon-list {
					width: 25%;
					height: 75px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text {
						color: #878787;
						margin-top: 2px;
					}
				}
			}
		}		
		.content-bottom {
			flex: 1;
			width: 100%;
			padding-top: 8px;
			font-size: 13px;
			background: #222222;
			position: relative;
			display: flex;
			flex-direction: column;
			.announcement {
				margin: 0 auto;
				width: 92%;
				height: 80px;
			};
			.my-object {
				flex: 1;
				margin: 0 auto;
				width: 92%;
				display: flex;
				flex-direction: column;
				.my-object-title {
					height: 20px;
					line-height: 20px;
					text {
						&:first-child {
							font-size: 14px;
							color: #878787;
							margin-right: 8px;
						};
						&:last-child {
							font-size: 20px;
							color: #fff;
						}
					}
				};
				.no-object {
					flex: 1
				}
			};
		}
	}
</style>
