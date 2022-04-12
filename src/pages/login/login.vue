<template>
	<view class="content-box">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="content-top">
			<text>登录某某</text>
			<text>发现有趣</text>
		</view>
		<view class="content-middle">
			<view class="phone-number">
				<input class="uni-input" @input="inputEvent" type="number" placeholder="请输入手机号码" />
			</view>
			<view class="send-auth-box" @click="loginToIndex">
				<text>发送短信验证码</text>
			</view>
			<view class="tip-info">
				<uni-icons type="checkbox" size="15" color="#ffd39c"></uni-icons>
				<text>已阅读并同意</text>
				<text>《用户协议》</text>
				<text>和</text>
				<text>《隐私协议》</text>
			</view>
		</view>
		<view class="content-bottom">
			<view>
				<text>
					其它登录方式
				</text>
			</view>
			<view @click="weixinAuthEvent">
				<image src="/static/img/weixin.png"/>
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
				phoneNumber: ''
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
			// 输入框值改变事件
			inputEvent (event) {
				this.phoneNumber = event.detail.value
			},
			// 手机号登录验证
			loginToIndex () {
				uni.redirectTo({
					url: '/digitalCollectPage/pages/verificationCode/index/index'
				})
			},
			// 微信登录验证
			weixinAuthEvent () {
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "~@/common/stylus/variable.scss";
	.content-box {
		@include content-wrapper;
		background: #252525;
		.status_bar {
			height: 50px;
			width: 100%;
		};
		.content-top {
			height: 32vh;
			line-height: 32vh;
			width: 80%;
			margin: 0 auto;
			text {
				font-size: 26px;
				font-weight: bold;
				&:first-child {
					color: #FFFFFF;
					margin-right: 20px;
				};
				&:last-child {
					color: #747474
				}
			}
		};
		.content-middle {
			width: 80%;
			margin: 0 auto;
			.phone-number {
				.uni-input {
					color: #fff;
					height: 50px;
					@include bottom-border-1px(#6f6f6f);
					font-size: 18px
				}
			};
			.send-auth-box {
				height: 56px;
				border-radius: 30px;
				font-size: 18px;
				color: #333;
				background: #ffd39c;
				margin: 30px 0;
				text-align: center;
				line-height: 56px
			};
			.tip-info {
				font-size: 14px;
				text-align: center;
				.uni-icons {
					margin-right: 6px
				};
				text {
					&:nth-child(2) {
						color: #646464
					};
					&:nth-child(3) {
						color: #dbdbdb
					};
					&:nth-child(4) {
						color: #646464
					};
					&:nth-child(5) {
						color: #dbdbdb
					};
				}
			}
		};		
		.content-bottom {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			>view {
				&:first-child {
					font-size: 14px;
					color: #a0a0a0;
					margin-bottom: 20px
				};
				&:last-child {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>
