document.getElementById('button').onclick = function(){
    window.alert('Coming from internal CSS');

    document.getElementById('button').id ="button_two";
    document.getElementsByTagName('img')[0].src="https://admin.kuathletics.com/s3/sidearm.sites/kuathletics.com/custompages/gallery/WBB_Oklahoma_State_01192019/thumbs/_big_WBB_Oklahoma_State_01192019_0558.JPG?width=400&height=400&mode=crop&quality=80&format=jpg";
}