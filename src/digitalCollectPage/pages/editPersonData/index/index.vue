<template>
	<view class="content-box">
		<uni-nav-bar height="50px" title="个人信息" :statusBar="true" :border="false" background-color="#252525" color="#fff" 
			left-icon="left"
			@clickLeft="backTo"
		/>
		<view class="person-message-list">
			<view class="profile-picture">
				<view class="left">
					<text>头像</text>
				</view>
				<view class="right">
					<view>
						<image src="/static/img/default-person.jpg"/>
					</view>
					<view>
						<uni-icons type="forward" size="20" color="#c0bebe"></uni-icons>
					</view>
				</view>
			</view>
			<view class="nick-name">
				<view class="left">
					<text>昵称</text>
				</view>
				<view class="right">
					<view>
						<text>藏家-87832</text>
					</view>
					<view>
						<uni-icons type="forward" size="20" color="#c0bebe"></uni-icons>
					</view>
				</view>
			</view>
			<view class="phone-number">
				<view class="left">
					<text>手机号</text>
				</view>
				<view class="right">
					<text>
						12343434342
					</text>
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
				uni.switchTab({
				    url: '/pages/personInfo/personInfo'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		.person-message-list {
			width: 92%;
			margin: 0 auto;
			margin-top: 20px;
			padding: 6px;
			background: #383838;
			border-radius: 10px;
			.profile-picture {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				@include bottom-border-1px(#6f6f6f);
				height: 55px;
				padding: 6px;
				.left {
					font-size: 16px;
					color: #FFFFFF;
					display: flex;
					flex-direction: column;
					justify-content: center;
				};
				.right {
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					image {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						margin-right: 8px;
					};
					view {
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
				}
			};
			.nick-name {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				@include bottom-border-1px(#6f6f6f);
				height: 55px;
				padding: 6px;
				.left {
					font-size: 16px;
					color: #FFFFFF;
					display: flex;
					flex-direction: column;
					justify-content: center;
				};
				.right {
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					text {
						font-size: 14px;
						color: #c0bebe;
					};
					> view {
						display: flex;
						flex-direction: column;
						justify-content: center;
						&:first-child {
							margin-right: 8px;
						}
					}
				}
			};
			.phone-number {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				height: 55px;
				padding: 6px;
				.left {
					font-size: 16px;
					color: #FFFFFF;
					display: flex;
					flex-direction: column;
					justify-content: center;
				};
				.right {
					display: flex;
					flex-direction: column;
					justify-content: center;
					text {
						font-size: 14px;
						color: #c0bebe;
					};
				}
			}
		}
	}
</style>
