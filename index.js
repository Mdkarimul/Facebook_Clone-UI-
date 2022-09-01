const settingMenu = document.querySelector(".settings-menu");
const dark_btn = document.querySelector("#dark-btn");
function settingsMenuToggle(){
   settingMenu.classList.toggle("settings-menu-height");
}

dark_btn.onclick = function(){
  this.classList.toggle('dark-btn-on');
  document.body.classList.toggle('dark-theme');

  if(localStorage.getItem('theme')=='light'){
    localStorage.setItem('theme','dark');
  }else{
    localStorage.setItem('theme','light');
  }
}


if(localStorage.getItem('theme')=='light')
{
    dark_btn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}else if(localStorage.getItem('theme')=='dark')
{
    dark_btn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}else{
    localStorage.setItem('theme','light');
}