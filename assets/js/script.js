// 스크롤 헤더 고정
function setFixedHeader() {
    let header = document.querySelector('header.fix-header');


    window.addEventListener('scroll', function () {
        let currentPosY = window.scrollY;

        if(currentPosY > 10) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

    });
}

// Allmenu
function setAllMenu(){
    let openbtn = document.querySelector('.btn-toggle.open');
    let allMenu = document.querySelector('.allmenu-wrap');
    let closebtn = document.querySelector('.btn-toggle.close');

    openbtn.addEventListener('click', function(){
        allMenu.classList.add('open');
    });
    closebtn.addEventListener('click', function(){
        allMenu.classList.remove('open');
    });
}

// 탭
function setTabs(){
    let tabItem = document.querySelectorAll('.tab-list .tab-item');
    let tabContent = document.querySelectorAll('.tab-content');

    tabItem.forEach((item, index) => {

        item.addEventListener("click", (e) => {

            e.preventDefault();
      
            tabContent.forEach((content) => {
                content.classList.remove("active");
            });
  
            tabItem.forEach((content) => {
                content.classList.remove("active");
            });

            tabItem[index].classList.add("active");
            tabContent[index].classList.add("active");
        });
    });
}

// 스크롤 애니메이션
function setScrollAnimate(){
    let section = document.querySelectorAll('.animate');

    window.addEventListener('scroll', function () {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop-500;

            if(top >= offset){
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        })
    });
}
function setMoheight(){
    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    // const vh = window.innerHeight * 0.01;   // [1]
    // document.documentElement.style.setProperty('--vh', `${vh}px`)
    // const handleResize = () => {
    //     const vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty("--vh", `${vh}px`);
    // };
    
    // useEffect(() => {
    //     window.addEventListener("resize", handleResize);
    //     return () => {
    //       window.removeEventListener("resize", handleResize);
    //     };
    // }, []);
}

document.addEventListener('DOMContentLoaded', function(){
    setFixedHeader();
    setAllMenu();
    setTabs();
    setScrollAnimate();
    setMoheight();
});