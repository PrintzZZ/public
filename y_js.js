console.log("DOM加载...")
window.addEventListener('load', function () {
    console.log("DOM加载完成！")
    var item_li = document.getElementsByClassName('tab_item')
    var a = item_li.length;
    var card = document.getElementsByClassName('AXseries')
    for(var i=0;i<a;i++){
        item_li[i].index = i;
        item_li[i].onclick = function (){
            for(var n=0;n<a;n++){
                item_li[n].className = 'tab_item';
                card[n].className = 'AXseries AX_none';
            }
            console.log('Tab切换,',this.index+1);
            this.className = 'tab_item tab_active';
            var card_c = this.parentNode.parentNode.children[1].children[this.index];
            card_c.className = 'AXseries';
        }
    }
})