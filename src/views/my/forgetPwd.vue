<template>
	<div class="forgetPwd">
		<child-title :title="title"></child-title>
		<form>
			<ul class="input">
				<li>
					<input name='account' type="text" placeholder="输入帐号">
				</li>
				<li>
					<input name='newPwd1' type="password" placeholder="输入新密码">
				</li>
				<li>
					<input name='newPwd2' type="password" placeholder="重新输入密码">
				</li>
				<li>
					<input name='code' type="text" placeholder="输入验证码">
					<img src="" alt="">
				</li>
				<li>
					<input name='code' type="text" placeholder="输入手机验证码">
					<a>获取</a>
				</li>
			</ul>
			<button @click.prevent="confirm">确认</button>
		</form>
		
	</div>
</template>
<script>
	import childTitle from '../../components/childTitle.vue'
	export default{
		components:{
			childTitle
		},
		data(){
			return {
				title:'注册帐号',
			}
		},
		mounted(){
			this.initBg()
		},
		methods:{
			initBg(){
				var wH=document.documentElement.clientHeight;
				var tH=document.querySelector('.footer').clientHeight;
				document.querySelector('.forgetPwd').style.height=(wH-tH)+'px';
				document.querySelector('.forgetPwd').style.background='#2a2c33';
			},
			confirm(){
				//表单提交
			}
		}
	}
</script>
<style scoped lang='less'>
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
	}
	ul{
		margin:0.28rem;
		& li{
			width:100%;
			border-bottom:1px solid #eaeaea;
			position:relative;
			& input{
				display:block;
				border:0 none;
				background:#fff;
				width:100%;
				box-sizing:border-box;
				padding:0 0.36rem;
				color:#999;
				
				.font(14px,44px);
				[data-dpr='2'] &{
					.font(28px,88px);
				}
				[data-dpr='3'] &{
					.font(42px,132px);
				}
			}
			&:nth-child(1){				
				& input{
					border-radius:0.08rem 0.08rem 0 0;
				}
			}
			&:nth-child(5){
				& input{
					border-radius:0 0 0.08rem 0.08rem;
				}
			}
			& img{
				position:absolute;
				right:0.28rem;
				top:0.12rem;
				bottom:0.12rem;
				width:1.6rem;
				background:#aaa;
			}
			& a{
				position:absolute;
				right:0.28rem;
				top:0.2rem;
				bottom:0.2rem;
				padding:0 0.36rem;
				border-radius:0.36rem;
				text-align:center;
				background:#d1d1d1;
				color:#fff;
				.font(14px,32px);
				[data-dpr='2'] &{
					.font(28px,64px);
				}
				[data-dpr='3'] &{
					.font(42px,96px);
				}
			}			
		}
	}
	button{
		border:0 none;
		display:block;
		width:80%;
		height:0.96rem;
		color:#fff;
		font-size:0.4rem;
		font-family:'黑体';
		line-height:0.96rem;
		margin:0.4rem auto 0;
		background:url('../../../static/images/confirmBtn.png') center top no-repeat;
		background-size:contain;
	}
</style>