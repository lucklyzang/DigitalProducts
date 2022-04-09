<template>
	<view class="content-box">
		<uni-nav-bar height="50px" title="设置" :statusBar="true" :border="false" background-color="#252525" color="#fff"
			left-icon="left"
			@clickLeft="backTo"
		/>
		<view class="profile-picture">
			<view class="left">
				<view>
					<uni-icons type="chat" size="30" color="#fff"></uni-icons>
				</view>
				<view>
					<text>消息通知设置</text>
				</view>
			</view>
			<view class="right">
				<view>
					<uni-icons type="forward" size="20" color="#c0bebe"></uni-icons>
				</view>
			</view>
		</view>
		<view class="profile-picture common-set">
			<view class="left">
				<view>
					<uni-icons type="gear" size="30" color="#fff"></uni-icons>
				</view>
				<view>
					<text>通用设置</text>
				</view>
			</view>
			<view class="right">
				<view>
					<uni-icons type="forward" size="20" color="#c0bebe"></uni-icons>
				</view>
			</view>
		</view>
		<view class="logout" @click="logOut">
			<text>退出登录</text>
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
			logOut () {
				uni.redirectTo({
				    url: '/pages/login/login'
				});
			},
			backTo () {
				uni.switchTab({
				    url: '/pages/personInfo/personInfo'
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "~@/common/stylus/variable.scss";
	::v-deep.uni-navbar {
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
		.profile-picture {
			width: 92%;
			margin: 0 auto;
			margin-top: 20px;
			padding: 6px;
			background: #383838;
			border-radius: 10px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			height: 55px;
			padding: 6px;
			.left {
				font-size: 16px;
				color: #FFFFFF;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				>view {
					display: flex;
					flex-direction: column;
					justify-content: center;
					&:first-child {
						margin-right: 8px;
					}
				}
			};
			.right {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		};
		.common-set {
			margin-top: 8px
		};
		.logout {
			width: 92%;
			margin: 0 auto;
			margin-top: 50px;
			padding: 6px;
			background: #383838;
			border-radius: 10px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			height: 55px;
			padding: 6px;
			font-size: 16px;
			color: #ff7373;
			
		}
	}
</style>

