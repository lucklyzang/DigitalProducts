<template>
	<view class="content-box">
		<uni-nav-bar height="50px" :statusBar="true" :border="false" background-color="#252525" color="#fff"
			left-icon="left"
			right-icon="redo"
			@clickLeft="backTo"
		/>
		<view class="content-top">
			<image src="/static/img/default-person.jpg"/>
			<view class="synopsis">
				<view class="title">
					<text>
						新疆喀纳斯之秋
					</text>
				</view>
				<view class="number">
					<text>限量</text>
					<text>8000 份</text>
				</view>
				<view class="experience">
					<text>
						购买后即可体验内容
					</text>
				</view>
			</view>
		</view>
		<view class="content-middle">
			<view class="framer">
				<view>
					<image src="/static/img/default-person.jpg"/>
				</view>
				<view>
					<text>创作者</text>
					<text>乔玲</text>
				</view>
			</view>
			<view class="production-story">
				<text>作品故事</text>
			</view>
		</view>
		<view class="content-bottom">
			<view>
				<text>¥ 59.90</text>
			</view>
			<view>
				<text>即将开售</text>
				<text>03:05:28</text>
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
		position: sticky;
		top: 50px;
		background: #252525;
		width: 100%;
		z-index: 200;
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
			height: 500px;
			position: relative;
			image {
				width: 100%;
				height: 100%
			};
			.synopsis {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.title {
					font-size: 24px;
					color: #FFFFFF;
					font-weight: bold;
				};
				.number {
				    font-size: 14px;
				    margin: 6px 0;
				    text {
					    display: inline-block;
					    &:first-child {
							background: orange;
						    color: black;
						    padding: 1px 4px 1px 4px;
						    border-top-left-radius: 2px;
						    border-bottom-left-radius: 2px;
						};
						&:last-child {
							background: #646363;
							color: #e3cd33;
							padding: 1px 4px 1px 4px;
							border-top-right-radius: 2px;
							border-bottom-right-radius: 2px
						}
					}
				};
				.experience {
					font-size: 13px;
					color: #767676
				}
			}
		};
		.content-middle {
			width: 94%;
			margin: 0 auto;
			background: rgb(43 43 43);
			padding: 14px 14px 6px 14px;
			margin-top: 20px;
			box-sizing: border-box;
			border-top-left-radius: 14px;
			border-top-right-radius: 14px;
			.framer {
				display: flex;
				flex-flow: row nowrap;
				@include bottom-border-1px(#6f6f6f);
				padding-bottom: 14px;
				box-sizing: border-box;
				> view {
					&:first-child {
						width: 50px;
						height: 50px;
						border-radius: 50%;
						margin-right: 10px;
						image {
							height: 100%;
							width: 100%;
							border-radius: 50%;
						}
					};
					&:last-child {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						text {
							color: #FFFFFF;
							&:first-child {
								font-size: 14px;
							};
							&:last-child {
								font-size: 17px;
							}
						}
					}
				}
			};
			.production-story {
				line-height: 60px;
				text-align: center;
				margin-top: 10px;
				text {
					font-size: 20px;
					color: #FFFFFF
				}
			}
		};		
		.content-bottom {
			height: 40px;
			width: 94%;
			margin: 0 auto;
			margin-top: 10px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			> view {
				&:first-child {
					font-size: 18px;
					height: 50px;
					line-height: 50px;
					color: #FFFFFF
				};
				&:last-child {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					background: rgb(47 47 47);
					width: 180px;
					padding: 26px 0;
					box-sizing: border-box;
					height: 50px;
					border-radius: 26px;
					color: #FFFFFF
				}
			}
		}
	}
</style>

