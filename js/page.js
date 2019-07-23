
page.createLabel();
page.tab();

function tools_show() {
    $("#template").toggle('0.5s')
};

function tools_show() {
    $("#tools").toggle('0.5s')
}










































// function mobileSort() {
//     var node = $("#wrap");
//     var draging = null;
//     //获取元素在父元素中的index
//     function _index(el) {
//         var index = 0;
//         if (!el || !el.parentNode) {
//             return -1;
//         }
//         while (el && (el = el.previousElementSibling)) {
//             index++;
//         }
//         return index;
//     }
//     // dragstart：按下鼠标键并开始移动时触fa
//     node.ondragstart = function (event) {
//         //firefox设置了setData后元素才能拖动！！！！
//         //不能使用text，firefox会打开新tab
//         event.dataTransfer.setData("te", event.target.innerText);
//         //event.dataTransfer.setData("self", event.target);
//         draging = event.target;                                         //触发事件的元素
//     }
//     // dragover ：拖拽对象在投放区内移动时持续触发
//     node.ondragover = function (event) {
//         event.preventDefault();
//         var target = event.target;

//     }
// }
// mobileSort();