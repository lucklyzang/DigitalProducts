<template>
  <view class="page-box">
	<view class="status-bar">
		<!-- 这里是状态栏 -->
	</view>
	<view class="content">
		<view class="tab-switch" :animation="animationData">
			<text v-for="(item,index) in tabTitlelList" :key="index" @click="tabSwitchEvent(index)"
				:class="{'active-tab-style': index === currentTabIndex }"
			>
				{{
					 item.name
				}}
			</text>
		</view>
		<view class="switch-content">
			<view class="object-box" v-show="currentTabIndex === 0">
				<view class="rare-object">
					稀有藏品,免费抽
				</view>
				<view class="object-list" @click="objectDetailEvent">
					<view class="sell-info-area">
						<view class="left">
							<uni-icons type="home" size="14" color="#90d56c"></uni-icons>
							<text>即将开售</text>
							<text>03:06:00</text>
						</view>
						<view class="right">
							<uni-icons type="home" size="16" color="#e9ad70"></uni-icons>
							<text>提醒我</text>
						</view>
					</view>
					<view class="image-area">
						<image src="/static/img/default-person.jpg"/>
					</view>
					<view class="message-area">
						<view class="left">
							<view class="name">
								<text>新疆喀纳斯之秋</text>
							</view>
							<view class="number">
								<text>限量</text>
								<text>8000 份</text>
							</view>
							<view class="author">
								<image src="/static/img/default-person.jpg"/>
								<text>乔玲</text>
							</view>
						</view>
						<view class="right">
							<view>
								<text>¥</text>
								<text>59.90</text>
							</view>
						</view>
					</view>
				</view>
				<view class="object-list">
					<view class="sell-info-area">
						<view class="left">
							<uni-icons type="home" size="14" color="#90d56c"></uni-icons>
							<text>即将开售</text>
							<text>03:06:00</text>
						</view>
						<view class="right">
							<uni-icons type="home" size="16" color="#e9ad70"></uni-icons>
							<text>提醒我</text>
						</view>
					</view>
					<view class="image-area">
						<image src="/static/img/default-person.jpg"/>
					</view>
					<view class="message-area">
						<view class="left">
							<view class="name">
								<text>新疆喀纳斯之秋</text>
							</view>
							<view class="number">
								<text>限量</text>
								<text>8000 份</text>
							</view>
							<view class="author">
								<image src="/static/img/default-person.jpg"/>
								<text>乔玲</text>
							</view>
						</view>
						<view class="right">
							<view>
								<text>¥</text>
								<text>59.90</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="sell-date-box" v-show="currentTabIndex === 1">
				<view class="sell-title">
					<view class="left">
						<text>近期发售计划</text>
					</view>
					<view class="right">
						<text>已订阅</text>
						<text>分 享</text>
					</view>
				</view>
				<view class="sell-content-list">
					<view class="month-day">
						<text>04月10日</text>
					</view>
					<view class="hour">
						<text>12:00</text>
					</view>
					<view class="object-details">
						<view>
							<image src="/static/img/default-person.jpg"/>
						</view>
						<view>
							<view>
								<text>首届洛阳牡丹花会会徽</text>
							</view>
							<view>
								<text>限量</text>
								<text>8000 份</text>
							</view>
							<view class="">
								<text>¥</text>
								<text>59.90</text>
							</view>
						</view>
					</view>
				</view>
				<view class="sell-content-list">
					<view class="month-day">
						<text>04月10日</text>
					</view>
					<view class="hour">
						<text>12:00</text>
					</view>
					<view class="object-details">
						<view>
							<image src="/static/img/default-person.jpg"/>
						</view>
						<view>
							<view>
								<text>首届洛阳牡丹花会会徽</text>
							</view>
							<view>
								<text>限量</text>
								<text>8000 份</text>
							</view>
							<view class="">
								<text>¥</text>
								<text>59.90</text>
							</view>
						</view>
					</view>
				</view>
				<view class="sell-content-list">
					<view class="month-day">
						<text>04月10日</text>
					</view>
					<view class="hour">
						<text>12:00</text>
					</view>
					<view class="object-details">
						<view>
							<image src="/static/img/default-person.jpg"/>
						</view>
						<view>
							<view>
								<text>首届洛阳牡丹花会会徽</text>
							</view>
							<view>
								<text>限量</text>
								<text>8000 份</text>
							</view>
							<view class="">
								<text>¥</text>
								<text>59.90</text>
							</view>
						</view>
					</view>
				</view>
				<view class="sell-content-list">
					<view class="month-day">
						<text>04月10日</text>
					</view>
					<view class="hour">
						<text>12:00</text>
					</view>
					<view class="object-details">
						<view>
							<image src="/static/img/default-person.jpg"/>
						</view>
						<view>
							<view>
								<text>首届洛阳牡丹花会会徽</text>
							</view>
							<view>
								<text>限量</text>
								<text>8000 份</text>
							</view>
							<view class="">
								<text>¥</text>
								<text>59.90</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="name-auth">
			<text>实名认证后才可以购买数字藏品</text>
			<text @click="goAuthNameEvent">去认证</text>
		</view>
	</view>
  </view>
</template>

<script>
import {
		mapGetters,
		mapMutations
} from 'vuex'
import {logIn} from '@/api/login.js'
export default {
  data() {
    return {
		tabTitlelList: [
			{name: '数字藏品'},
			{name: '发售日历'}
		],
		isEffect: false,
		currentTabIndex: 0,
		animationData: {}
    }
  },
	computed: {
		...mapGetters([
		]),
	},
	onLoad() {
		this.animation = uni.createAnimation();
	},
	onUnload () {
		this.animationData = {};
	},
	methods: {
		tabSwitchEvent (index) {
			this.currentTabIndex = index;
			console.log(index,this.currentTabIndex)
		},
		
		// 藏品点点击详情事件
		objectDetailEvent () {
			uni.redirectTo({
				url: '/digitalCollectPage/pages/digitalCollectionDetail/index/index'
			})
		},
		// 实名认证事件
		goAuthNameEvent () {
			uni.redirectTo({
				url: '/digitalCollectPage/pages/authName/index/index'
			})
		}
	}
}
</script>

<style lang="scss">
@import "~@/common/stylus/variable.scss";
.page-box {
  @include content-wrapper;
  background: #252525;
  .status-bar {
	   height: 50px;
	   width: 100%;
	   background: #252525;
	   position: sticky;
	   top: 0;
	   z-index: 200;
  };
  .content {
	flex: 1;
	display: flex;
	flex-direction: column;
	position: relative;
	.tab-switch {
		position: sticky;
		top: 50px;
		background: #252525;
		width: 100%;
		z-index: 200;
		text-align: center;
		text {
			display: inline-block;
			color: #777575;
			font-size: 18px;
			width: 100px;
			height: 60px;
			line-height: 60px;
			text-align: center;
		};
		.active-tab-style {
			color: #FFFFFF;
			font-size: 20px;
		}
	  };
	  .switch-content {
		  flex: 1;
		  width: 92%;
		  margin: 0 auto;
		  .object-box {
				.rare-object {
					height: 80px;
					border-radius: 10px;
					background: #ff5500;
					margin-bottom: 10px;
				};
			  .object-list {
				  border-radius: 10px;
				  background: rgb(73 73 73);
				  position: relative;
				  margin-bottom: 20px;
				  .sell-info-area {
					  position: absolute;
					  top: 10px;
					  left: 4%;
					  width: 92%;
					  display: flex;
					  flex-flow: row nowrap;
					  justify-content: space-between;
					  z-index: 100;
					  color: #333;
					  .left {
						  background: rgb(99 99 99);
						  border-radius: 16px;
						  padding: 6px 10px;
						  color: #90d56c;
						  height: 20px;
						  text {
							  &:nth-child(2) {
								  margin: 0 4px
							  }
						  }
					  };
					  .right {
						  background: rgb(59 56 56);
						  border-radius: 16px;
						  padding: 8px 8px;
						  color: #e9ad70;
						  text {
						  &:nth-child(1) {
							  margin: 0 4px
							}
						  }
					  }
				  };
				  .image-area {
					  height: 350px;
					  image {
						  width: 100%;
						  height: 100%;
						  border-radius: 10px;
					  }
				  };
				  .message-area {
					  padding: 16px 0;
					  width: 92%;
					  margin: 0 auto;
					  display: flex;
					  flex-flow: row nowrap;
					  justify-content: space-between;
					  .left {
						  .name {
							  font-size: 19px;
							  color: #FFFFFF
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
						  .author {
							  image {
								  width: 20px;
								  height: 20px;
								  border-radius: 50%;
								  vertical-align: top;
							  };
							  text {
								  margin-left: 6px;
								  font-size: 13px;
								  color: #d4d0d0
							  }
						  }
					  };
					  .right {
						  display: flex;
						  flex-direction: column;
						  justify-content: flex-end;
						  text {
							  font-size: 17px;
							  color: #FFFFFF;
							  &:first-child {
								  margin-right: 4px
							  }
						  }
					  }
				  }
			  }
		  };
		  .sell-date-box {
			  .sell-title {
				  display: flex;
				  flex-flow: row nowrap;
				  justify-content: space-between;
				  margin-bottom: 20px;
				  .left {
					  color: #ffffe7;
					  font-size: 22px;
				  };
				  .right {
					  text {
						  display: inline-block;
						  font-size: 14px;
						  &:first-child {
							  color: #777575;
						  };
						  &:last-child {
							  padding: 4px 16px;
							  margin-left: 16px;
							  color: #333;
							  background: #ffffe7;
							  border-radius: 20px
						  }
					  }
				  }
			};
			.sell-content-list {
				border-radius: 12px;
				background: rgb(54,54,58);
				margin-bottom: 20px;
				padding: 6px 0 0 0;
				border-radius: 12px;
				.month-day {
					color: #FFFFFF;
					font-size: 20px;
					padding-left: 12px;
				};
				.hour {
					color: #FFFFFF;
					font-size: 18px;
					margin: 6px 0;
					padding-left: 12px;
				};
				.object-details {
					display: flex;
					flex-flow: row nowrap;
					justify-content: flex-start;
					border-radius: 12px;
					background: rgb(63,63,63);
					>view {
						&:first-child {
							width: 120px;
							height: 120px;
							border-radius: 12px;
							margin-right: 12px;
							image {
								width: 100%;
								height: 100%;
								border-radius: 12px;
							}
						};
						&:last-child {
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							padding: 4px 0;
							> view {
								&:nth-child(1) {
									font-size: 18px;
									color: #FFFFFF
								};
								&:nth-child(2) {
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
								&:nth-child(3) {
									text {
									  font-size: 18px;
									  color: #FFFFFF;
									  &:first-child {
										  margin-right: 4px
									  }
									}
								}
							}
						}
					}
				}
			}
		  }
	  };
	.name-auth {
		width: 92%;
		left: 4%;
		position: fixed;
		bottom: 10px;
		height: 50px;
		z-index: 300;
		border-radius: 6px;
		background: #ffc252;
		text-align: center;
		padding: 0 10px;
		line-height: 50px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		>text {
			display: inline-block;
			&:first-child {
				font-weight: bold
			};
			&:last-child {
				text-align: center;
				line-height: 36px;
				height: 36px;
				width: 80px;
				box-sizing: border-box;
				border-radius: 20px;
				font-size: 14px;
				background: rgb(40,40,40);
				color: #f3ad2b;
			}
		}
	}  
  }
}
</style>
