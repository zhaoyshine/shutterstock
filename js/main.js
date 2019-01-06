var lists = 31;
var content = "";
for ( var i = 1; i < lists; i++ ) {
  console.log(i);
  content += `<div class="weui weui-cells weui-cells_after-title">
      <div class="card">
        <image class="cover" src="image/`+ (i%2==0?"test":"test1") +`.jpg"></image>
        <div class="info">
          <div class="h2">哈哈哈哈</div>
          <div class="detail">
            <div><text class="white fs10">描述 </text><text class="white fs14">呵呵呵呵呵</text></div>
            <div><text class="white fs10">描述 </text><text class="white fs14">嘻嘻嘻嘻嘻</text></div>
            <div><text class="white fs10">描述 </text><text class="white fs14">嘿嘿嘿嘿嘿</text></div>
          </div>
          <div class="user">
            <image class="avatar" width="30px" height="30px" src="image/test.jpg"></image>
            <div class="white fs12">by 咯咯咯咯咯</div>
            <div class="white fs12">20次点赞 / 30次收藏 </div>
          </div>
        </div>
      </div>
    </div>`
}
$("#main").html(content);
console.log('ok');