<template>
	<view class="content-box">
		<uni-nav-bar height="50px" :statusBar="true" :border="false" background-color="#252525" color="#fff"
			left-icon="left"
			@clickLeft="backTo"
		/>
		<view class="content-top">
			<text>请输入验证码</text>
			<text>已发送到手机号 134******47</text>
			<text>58s后重新发送</text>
		</view>
		<view class="content-center">
			<view>
				<input class="uni-input" maxlength="1" @input="inputEventOne" type="number" />
			</view>
			<view>
				<input class="uni-input" maxlength="1" @input="inputEventTwo" type="number" />
			</view>
			<view>
				<input class="uni-input" maxlength="1" @input="inputEventThree" type="number" />
			</view>
			<view>
				<input class="uni-input" maxlength="1" @input="inputEventFour" type="number" />
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
				codeOne: '',
				codeTwo: '',
				codeThree: '',
				codeFour: ''
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
					url: '/pages/login/login'
				})
			},
			inputEventOne (event) {},
			inputEventTwo (event) {},
			inputEventThree (event) {},
			inputEventFour (event) {}
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
			justify-content: center;
			align-items: center;
			text {
				&:nth-child(1) {
					font-size: 30px;
					color: #FFFFFF
				};
				&:nth-child(2) {
					margin: 10px 0;
					font-size: 12px;
					color: #8e8e8e
				};
				&:nth-child(3) {
					font-size: 12px;
					color: #736166
				}
			}
		};
		.content-center {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			margin-top: 30px;
			> view {
				width: 50px;
				margin-right: 16px;
				&:last-child {
					margin-right: 0;
				};
				.uni-input {
					color: #fff;
					height: 50px;
					text-align: center;
					@include bottom-border-1px(#6f6f6f,2px);
					font-size: 18px
				}
			}
		}
	}
</style>





