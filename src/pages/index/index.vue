<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
			<uni-calendar 
				ref="calendar"
				:insert="false"
				 />
				 <button @click="open">打开日历</button>
      <text class="title">{{ title }}</text>
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
      title: 'Hello',
    }
  },
	computed: {
		...mapGetters([
		]),
	},
  onLoad() {
	},
  methods: {
		// 账号密码事件
		sure () {
			let loginMessage = {
			  username: '002',
			  password: 123456789
			};
			this.showLoadingHint = true;
			logIn(loginMessage).then((res) => {
				if (res) {
				  if (res.data.code == 200) {
				  } else {
				  }
				};
			  })
			  .catch((err) => {
			  })
		},
		
		open () {
					this.$refs.calendar.open();
		}
	}
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	background-color: $uni-color-primary
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
