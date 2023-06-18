/* menu */
$("#toggler,#close").click(()=>{    
    $("#menu").toggleClass("max-xl:-translate-y-full")
    $("body").toggleClass("overflow-hidden")
});


/* dropdown */
$(".dropdown").each((i,el)=>{
    let toggler = $(el).find(".toggler")
    let list = $(el).find(".list")
    toggler.click(()=>{
        list.slideToggle(500)
    })
})


/* observer width */
let width = $(window).width();
$(window).on("load resize", () => {
    width = $(window).width()
    if(width < 1024) {
        let el = $(".el")       
        for(let i = 6; i < el.length; i++) {
            $(el[i]).addClass("max-lg:hidden")
        }
        let count = 6;
        $("#load").on("click", ()=>{
            if(count < 24) {
                count += 6
            } else {
                count +=1
            }               
            if(count <= el.length) {
                for(let i = 0; i < count; i++) {
                    $(el[i]).removeClass("max-lg:hidden")
                }
            }
        })
    }
})


/* filter */
let filt = "all"
$(".filter").each((i,el)=>{
    $(el).on("click", () => {
        $(".filter").removeClass("filter-active")
        $(el).addClass("filter-active")
        filt = $(el).data("filt")
        $(".el").each((i,el)=>{
            if(filt == "all") {
                $(el).show(500)
            } else {
                let isFiltered = !$(el).hasClass(filt)
                if(!isFiltered) {
                    $(el).show(500)
                } else {
                    $(el).hide(500)
                }
            }
        })
    })
})
