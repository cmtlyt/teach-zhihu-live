<template>
    <div class="bg">
        <div class="box">
            <div class="header">
                <h2>知乎</h2>
            </div>
            <div class="main">
                <div class="leftmain">
                    <div class="top">
                        <h3 class="one">打开知乎App</h3>
                        <span class="two">在「我的页」右上角打开扫一扫</span>
                        <div class="img"><img src="" alt=""></div>
                        <span class="three">其他扫码方式：微信</span>
                    </div>
                    <div class="bottom">
                        <ul>
                            <li>下载知乎App</li>
                            <li>开通机构号</li>
                            <li>无障碍模式</li>
                        </ul>
                    </div>
                </div>
                <div class="rightmain">
                    <div class="top"></div>
                    <div class="bottom"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.box {
    display: flex;
    flex-direction: column;
    height: 688px;
    width: 880px;
    margin: auto auto;
    text-align: center;
}

.header {
    flex: 20%;
    // background-color: purple;
    line-height: 136px;

    h2 {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bolder;
        color: rgb(73, 55, 235);
        font-size: 64px;
        letter-spacing: 12px;
    }
}

.main {
    flex: 80%;
    background-color: white;
    display: flex;
    box-sizing: border-box;

    .leftmain {
        flex: 40%;
        border-right: 1px solid #ccc;
        height: 100%;
        display: flex;
        flex-direction: column;

        .top {
            flex: 75%;
            border: 1px solid red;
            text-align: center;
            display: flex;
            flex-direction: column;
            padding-top: 90px;

            .one {
                flex: 10%;
                font-weight: bold;
            }

            .two {
                flex: 10%;
            }

            .three {
                flex: 10%;
                font-weight: bold;
            }

            .img {
                flex: 60%;
            }
        }

        .bottom {
            flex: 25%;
            border: 1px solid red;

            ul {
                display: flex;
                height: 80%;
                margin-top: 22px;
                justify-content: space-around;
                li {
                    display: block;
                    flex-basis: 28%;
                    font-size: 12px;
                    border-radius: 20px;
                    border: 1px solid #ccc;
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
    }

    .rightmain {
        flex: 60%;
        height: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .top {
            flex: 60%;
            border: 1px solid red;
        }

        .bottom {
            flex: 40%;

            border: 1px solid red;
        }
    }
}

.bg {
    background-color: rgb(174, 199, 221);
    height: 100vh;
}
</style>