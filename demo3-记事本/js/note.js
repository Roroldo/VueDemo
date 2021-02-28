var app = new Vue({
    el: "#todoapp",
    data: {
        // 总的待办事项
        todoList:["吃饭", "睡觉", "学习"],
        // 输入的内容
        inputValue:"",
    },
    methods:{
        addToDo:function() {
            this.todoList.push(this.inputValue);
        },
        delToDo:function(index) {
            this.todoList.splice(index, 1);
        },
        delAllToDo:function() {
            this.todoList = [];
        } 
    }
})