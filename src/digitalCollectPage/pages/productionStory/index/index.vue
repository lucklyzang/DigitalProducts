<template>
	<view class="content-box">
		<uni-nav-bar height="50px" title="作品故事" :statusBar="true" :border="false" background-color="#252525" color="#fff"
			left-icon="left"
			right-icon="redo"
			@clickLeft="backTo"
		/>
		<view class="content-top">
			<image src="/static/img/default-person.jpg"/>
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
				uni.redirectTo({
					url: '/digitalCollectPage/pages/digitalCollectionDetail/index/index'
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
			height: 500px;
			position: relative;
			image {
				width: 100%;
				height: 100%
			}
		};
		.content-bottom {
			width: 94%;
			left: 3%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			position: fixed;
			bottom: 20px;
			z-index: 300;
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


