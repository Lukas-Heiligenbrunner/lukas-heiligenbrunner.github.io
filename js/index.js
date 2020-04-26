$(function () {
    ;(function ($, win) {
        $.fn.inViewport = function (cb) {
            return this.each(function (i, el) {
                function visPx() {
                    const H = $(this).height(),
                        r = el.getBoundingClientRect(), t = r.top, b = r.bottom;
                    return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
                }

                visPx();
                $(win).on("resize scroll", visPx);
            });
        };
    }(jQuery, window));


    $("#section3").inViewport(function (px) {
        if (px) {
            $("#experienceheader").addClass("animationappear600ms");

            const expcontainer = $("#experiencecontentcontainer");
            expcontainer.addClass("animationappear300ms");
            expcontainer.addClass("experiencecontaineranimation");
        }
    });

    $("#section5").inViewport(function (px) {
        if (px) {
            $("#contactheader").addClass("animationappear600ms");
            $("#contactsubheader").addClass("animationappear300ms");
            $(".personalcontacts").addClass("animationappearnow");
        }
    });
})