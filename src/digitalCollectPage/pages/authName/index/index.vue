<template>
	<view class="content-box">
		<uni-nav-bar height="50px" :statusBar="true" :border="false" background-color="#252525" color="#fff"
			left-icon="left"
			@clickLeft="backTo"
		/>
		<view class="content-top">
			<view>
				<text>填写实名认证信息</text>
			</view>
			<view>
				<text>当前登录手机号:</text>
				<text>13401188547</text>
			</view>
			<view>
				<text>
					填写的身份认证信息,必须与上面的号码身份备案信息一致,否则无法通过认证,你今天有3次机会
				</text>
			</view>>
		</view>
		<view class="content-middle">
			<view class="phone-name">
				<input class="uni-input" @input="inputNameEvent" type="number" placeholder="请输入姓名" />
			</view>
			<view class="phone-name id-number">
				<input class="uni-input" @input="inputIdNumberEvent" type="number" placeholder="请输入身份证号" />
			</view>
			<view class="send-auth-box" @click="loginToIndex">
				<text>点 击 认 证</text>
			</view>
			<view class="tip-info">
				<uni-icons type="checkbox" size="15" color="#94f494"></uni-icons>
				<text>信息安全保障中, 信息仅用于身份确认</text>
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
				phoneNumber: '',
				idNumber: ''
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
			inputNameEvent (event) {
				this.phoneNumber = event.detail.value
			},
			inputIdNumberEvent (event) {
				this.idNumber = event.detail.value
			},
			backTo () {
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "~@/common/stylus/variable.scss";
	::v-deep.uni-navbar {
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
			height: 32vh;
			width: 80%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			> view {
				&:first-child {
					font-size: 32px;
					color: #FFFFFF
				};
				&:nth-child(2) {
					font-size: 16px;
					color: #6f6f6f;
					margin: 16px 0 8px 0;
					text {
						&:first-child {
							margin-right: 8px
						}
					}
				};
				&:nth-child(3) {
					font-size: 18px;
					color: #d27878
				}
			}
		};
		.content-middle {
			width: 80%;
			margin: 0 auto;
			.phone-name {
				.uni-input {
					color: #fff;
					height: 50px;
					@include bottom-border-1px(#6f6f6f);
					font-size: 18px
				}
			};
			.id-number {
				margin-top: 18px;
			};
			.send-auth-box {
				height: 56px;
				border-radius: 30px;
				font-size: 18px;
				color: #333;
				font-weight: bold;
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
				}
			}
		}
	}
</style>

