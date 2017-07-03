<template>
    <div>
        <el-menu router :default-openeds="openeds" theme="dark" class="left-bar-menu" @open="handleOpen" @close="handleClose">
            <el-menu-item index="/intro">实例介绍</el-menu-item>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-document"></i>归类一</template>
                <el-menu-item index="/menu1">menu1</el-menu-item>
                <el-menu-item index="/menu2">menu2</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-setting"></i>归类二</template>
                <el-menu-item index="/menu3">menu3</el-menu-item>
                <el-menu-item index="/menu4">menu4</el-menu-item>
                <el-menu-item index="/menu5">menu5</el-menu-item>
            </el-submenu>

        </el-menu>
    </div>
</template>

<script>
    export default{
        name:'left-bar',

        data(){
            return {
                openeds:["1","2"]
            }
        },

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>