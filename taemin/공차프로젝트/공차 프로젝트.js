            function show1(obj) {               //show는 마우스 올렸을 때 보여짐
                obj.innerHTML="브랜드";
                obj.classList.add("js_on");
                let sub = document.querySelector(".js_sub-item");
                sub.classList.add("js_sub-item-hover");
            }
            function hide1(obj) {               //hide는 마우스 올렸을 때 사라짐
                obj.innerHTML="Brand";
                obj.classList.remove("js_on");
                let sub = document.querySelector(".js_sub-item");
                sub.classList.remove("js_sub-item-hover");
            }
            function show2(obj) {
                obj.innerHTML="메뉴";
                obj.classList.add("js_on");
                let sub = document.querySelector(".js_sub-item");
                sub.classList.add("js_sub-item-hover");
            }
            function hide2(obj) {
                obj.innerHTML="Menu";
                obj.classList.remove("js_on");            
                let sub = document.querySelector(".js_sub-item");
                sub.classList.remove("js_sub-item-hover");
            }
            function show3(obj) {
                obj.innerHTML="매장";
                obj.classList.add("js_on");
                let sub = document.querySelector(".js_sub-item");
                sub.classList.add("js_sub-item-hover");
            }
            function hide3(obj) {
                obj.innerHTML="Store";
                obj.classList.remove("js_on");            
                let sub = document.querySelector(".js_sub-item");
                sub.classList.remove("js_sub-item-hover");
            }
            function show4(obj) {
                obj.innerHTML="멤버십";
                obj.classList.add("js_on");
                let sub = document.querySelector(".js_sub-item");
                sub.classList.add("js_sub-item-hover");
            }
            function hide4(obj) {
                obj.innerHTML="Membership";
                obj.classList.remove("js_on");            
                let sub = document.querySelector(".js_sub-item");
                sub.classList.remove("js_sub-item-hover");
            }
            function show5(obj) {
                obj.innerHTML="제휴서비스";
                obj.classList.add("js_on");
                let sub = document.querySelector(".js_sub-item");
                sub.classList.add("js_sub-item-hover");
            }
            function hide5(obj) {
                obj.innerHTML="Benefit";
                obj.classList.remove("js_on");            
                let sub = document.querySelector(".js_sub-item");
                sub.classList.remove("js_sub-item-hover");
            }
            function show6(obj) {
                obj.innerHTML="이벤트&뉴스";
                obj.classList.add("js_on");
                let sub = document.querySelector(".js_sub-item");
                sub.classList.add("js_sub-item-hover");
            }
            function hide6(obj) {
                obj.innerHTML="Event&News";
                obj.classList.remove("js_on");            
                let sub = document.querySelector(".js_sub-item");
                sub.classList.remove("js_sub-item-hover");
            }

            // 이미지를 배열로
            let liimgs = ["https://www.gong-cha.co.kr/uploads/board/20230626/3G6ceq2zDpyhkNdJ_20230626.jpg","https://www.gong-cha.co.kr/uploads/board/20230707/Aj4wYuB0gPZvEaGQ_20230707.jpg","https://www.gong-cha.co.kr/uploads/board/20230502/0nGiMx8vBpUXFkJh_20230502.jpg","https://www.gong-cha.co.kr/uploads/board/20230112/pqL7s1dwA0QYTRgM_20230112.jpg"];
            let as = ["https://www.gong-cha.co.kr/brand/menu/new.php","https://gong-cha-event.co.kr/?fromurl=owned_hompage&utm_source=gongcha&utm_medium=DA&utm_campaign=owned_hompage","http://www.gong-cha.co.kr/brand/menu/product.php?c=001002","#"];
            let i = 0;

            function yj_btn_next(){ // 버튼을 누르면 다음 사진으로 넘어가는 기능
                i++;
                if(i>=liimgs.length){
                    i=0;
                let detailSpan = document.querySelector('.btn_brandstory');
                    detailSpan.classList.remove("hide");
                }
                
                let slide = document.querySelector('.yj_slide-item');
                let img = slide.querySelector("img");
                let link = document.querySelector(".btn_brandstory");
    
                let nextImg = liimgs[i] ; 
                let nextlink = as[i];
             
                img.src = nextImg;
                link.href = nextlink;

                console.log(img.src);
                console.log(link.href);
                
                let slide2 = document.querySelector(".yj_slide");
                    slide2.animate( {
                        transform: [                          /* transform   translate 위치 이동 */
                        'translateX(100%)',    //시작
                        'translateX(0px)'      //도착
                        ]
                    }, 
                    {
                        duration : 600 // 위의효과가 x초간 지속되도록
                    });
             if( i == 3 ){
                let detailSpan = document.querySelector('.btn_brandstory');
                    detailSpan.classList.add("hide");
             }
            }
            
            setInterval(yj_btn_next, 6000); // 다음 이미지가 나오는 시간 간격

            function yj_btn_prev(){ // 버튼을 누르면 이전 사진으로 넘어가는 기능
                i--;   
                
                if(i<0){
                    i=liimgs.length-1;
                }
                if( i == 3 ){
                    let detailSpan = document.querySelector('.btn_brandstory');
                        detailSpan.classList.add("hide");
                }else{
                let detailSpan = document.querySelector('.btn_brandstory');
                    detailSpan.classList.remove("hide");
                }

                let slide = document.querySelector('.yj_slide-item');
                let img = slide.querySelector("img");
                let link = document.querySelector(".btn_brandstory");

                let prevImg = liimgs[i] ;
                let prevlink = as[i];
                
                img.src = prevImg;
                link.href = prevlink;

                let slide2 = document.querySelector(".yj_slide");
                    slide2.animate( {
                        transform: [                          /* transform   translate 위치 이동 */
                        'translateX(100%)',    //시작
                        'translateX(0px)'      //도착
                        ]
                    },
                    {
                        duration : 600 // 위의효과가 x초간 지속되도록
                    });
            }
            // 마우스를 뺄 때 색이 변하는 기능
            function changebrown(color){
                color.setAttribute('src','https://www.gong-cha.co.kr/view/gongcha/images/brand/quick_img_off.png');
            }
            // 마우스를 올릴 때 색이 변하는 기능
            function changered(color){
                color.setAttribute('src','https://www.gong-cha.co.kr/view/gongcha/images/brand/quick_img_on.png');
            }