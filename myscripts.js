
document.querySelector(".secondContainerParent").style.display = 'none';

document.querySelector(".btn2").addEventListener("click", function(){
    document.querySelector(".secondContainerParent").style.display = 'block';
});

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".secondContainerParent").style.display = 'none';
});
